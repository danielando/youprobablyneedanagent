'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Agent } from '@/app/types/Agent';
import { getAgentById } from '@/app/services/agentService';
import Link from 'next/link';
import { Bot, Target, Puzzle, ListChecks, CreditCard } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const styles = `
  .agent-card {
    padding: 1.5rem;
  }
`;

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        setLoading(true);
        const data = await getAgentById(id!);
        setAgent(data);
      } catch (err) {
        setError('Failed to load agent details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAgent();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error || !agent) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Card className="flex flex-col border-accent/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <span className="flex items-center gap-2">
                  {agent.name}
                  {agent.featured && (
                    <Badge className="bg-accent/10 text-accent">
                      Featured
                    </Badge>
                  )}
                </span>
              </div>
              <Badge variant="outline">
                {agent.pricingModel}
              </Badge>
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
              <div className="w-[48%] space-y-8">
                <p className="text-muted-foreground">{agent.description}</p>
                
                {/* Primary Use Case */}
                <div>
                  <h2 className="text-xl font-semibold mb-2">Primary Use Case</h2>
                  <p className="text-muted-foreground">{agent.primaryUseCase}</p>
                </div>

                {/* Problem Solved */}
                <div>
                  <h2 className="text-xl font-semibold mb-2">Problem Solved</h2>
                  <p className="text-muted-foreground">{agent.problemSolved}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                  <ul className="space-y-2">
                    {agent.keyFeatures.map((feature, index) => (
                      <li key={index} className="text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <Badge variant="secondary">{agent.category}</Badge>
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
  );
};

export default AgentDetails; 