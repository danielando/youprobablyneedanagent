'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Agent } from '@/app/types/Agent';
import { getAgentById, getAllAgents } from '@/app/services/agentService';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Bot, Target, Puzzle, ListChecks } from "lucide-react";
import Link from 'next/link';

const PlaceholderSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f8fafc" />
    <circle cx="200" cy="200" r="80" stroke="#94a3b8" strokeWidth="2" fill="none" />
    <path d="M160 120v160m80-160v160M120 160h160m-160 80h160" stroke="#94a3b8" strokeWidth="2" />
  </svg>
);

const AgentDetails: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter();
  const [agent, setAgent] = useState<Agent | null>(null);
  const [featuredAgents, setFeaturedAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch current agent
        const currentAgent = await getAgentById(id!);
        setAgent(currentAgent);
        
        // Fetch all agents and filter for same category
        const allAgents = await getAllAgents();
        console.log('All agents:', allAgents);
        
        const similarAgents = allAgents
          .filter(a => {
            const isSameCategory = a.category === currentAgent.category;
            const isDifferentAgent = a.id !== currentAgent.id;
            console.log(`Agent ${a.id}: same category: ${isSameCategory}, different agent: ${isDifferentAgent}`);
            return isSameCategory && isDifferentAgent;
          })
          .slice(0, 3);
        
        console.log('Similar agents:', similarAgents);
        setFeaturedAgents(similarAgents);
      } catch (err) {
        setError('Failed to load agent details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error || !agent) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Site Header */}
      <header className="border-b py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center">
            {/* Logo with Link */}
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Bot className="h-10 w-10 text-accent" />
            </Link>
            
            {/* Navigation */}
            <nav className="flex items-center gap-4">
              <Link href="/">
                <Badge 
                  variant="outline" 
                  className="cursor-pointer hover:bg-accent/10 px-6 py-2"
                >
                  Home
                </Badge>
              </Link>
              <Link href="/directory">
                <Badge 
                  variant="outline" 
                  className="cursor-pointer hover:bg-accent/10 px-6 py-2"
                >
                  Agent Directory
                </Badge>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Agent Details - Narrower width */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="py-12">
          <Card className="flex flex-col border-accent/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex justify-end">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{agent.pricingModel}</Badge>
                  <Badge variant="secondary">{agent.category}</Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex justify-between gap-8">
                {/* Left Column */}
                <div className="w-[48%]">
                  <div className="bg-accent/5 rounded-lg p-12">
                    <PlaceholderSVG />
                  </div>
                </div>

                {/* Right Column */}
                <div className="w-[48%]">
                  {/* Title and Description */}
                  <div className="mb-12">
                    <h1 className="text-3xl font-bold text-primary mb-4">{agent.name}</h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">{agent.description}</p>
                  </div>
                  
                  {/* Primary Use Case */}
                  <div className="mt-12 mb-12">
                    <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center gap-2">
                      <Target className="h-6 w-6 text-accent" />
                      Primary Use Case
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{agent.primaryUseCase}</p>
                  </div>

                  {/* Problem Solved */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-primary mb-3 flex items-center gap-2">
                      <Puzzle className="h-6 w-6 text-accent" />
                      Problem Solved
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{agent.problemSolved}</p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h2 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                      <ListChecks className="h-6 w-6 text-accent" />
                      Key Features
                    </h2>
                    <ul className="space-y-3">
                      {agent.keyFeatures.map((feature, index) => (
                        <li 
                          key={index} 
                          className="text-muted-foreground leading-relaxed"
                        >
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end items-center">
              <Button 
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-accent hover:text-white transition-colors"
                onClick={() => router.push('/directory')}
              >
                Back to Directory
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Similar Agents Section - Full width */}
      {featuredAgents.length > 0 && (
        <div className="border-t bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-lg font-medium text-muted-foreground mb-6">
              More {agent.category} Agents
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredAgents.map((featuredAgent) => (
                <Card 
                  key={featuredAgent.id} 
                  className="flex flex-col border-accent/10 hover:border-accent/20 transition-colors"
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-base flex justify-between items-start">
                      <span>{featuredAgent.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {featuredAgent.pricingModel}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {featuredAgent.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <div className="flex justify-between items-center w-full">
                      <Badge variant="secondary" className="text-xs">
                        {featuredAgent.category}
                      </Badge>
                      <Button 
                        size="sm"
                        variant="ghost"
                        className="text-accent hover:text-accent/80 hover:bg-accent/5 -mr-2"
                        onClick={() => router.push(`/directory/agent/${featuredAgent.id}`)}
                      >
                        View Details →
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentDetails; 