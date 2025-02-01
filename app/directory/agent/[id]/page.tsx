'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bot, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Agent } from '@/app/types/Agent';
import { getAgentById } from '@/app/services/agentService';
import { StarRating } from '@/app/components/StarRating';

export default function AgentDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        setLoading(true);
        const data = await getAgentById(params.id);
        setAgent(data);
      } catch (err) {
        setError('Failed to load agent details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAgent();
  }, [params.id]);

  const handleBack = () => {
    router.push('/directory');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center h-64">
              <p className="text-lg text-muted-foreground">Loading...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !agent) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg text-destructive">{error || 'Agent not found'}</p>
              <Button onClick={handleBack}>Back to Directory</Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Title */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="mb-6 flex justify-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Bot className="h-16 w-16 text-accent" />
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-primary mb-2">{agent?.name}</h1>
            <div className="flex gap-2 justify-center mb-4">
              <Badge variant="secondary">{agent?.category}</Badge>
              <Badge variant="secondary">{agent?.industry}</Badge>
              <Badge variant="outline" className="px-4">
                {agent?.pricingModel}
              </Badge>
            </div>
            <div className="flex flex-col items-center gap-2 mt-4">
              <StarRating 
                agentId={agent.id} 
                initialRating={agent.rating} 
                readonly={false}
              />
              <span className="text-sm text-muted-foreground">
                {agent.totalRatings} ratings
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left column - Image */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/10">
                <Image
                  src={agent?.image || "/placeholder.svg"}
                  alt={agent?.name || "Agent"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right column - Details */}
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold mb-3">Primary Use Case</h3>
                <p className="text-muted-foreground">{agent?.primaryUseCase}</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Problem Solved</h3>
                <p className="text-muted-foreground">{agent?.problemSolved}</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {agent?.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-accent">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Visit Agent</h3>
                <a 
                  href={agent.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </section>

              <div className="pt-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="hover:bg-accent hover:text-white transition-colors"
                >
                  Back to Directory
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 bg-secondary mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <nav className="flex gap-6">
              <Link 
                href="/pricing" 
                className="text-secondary-foreground hover:text-accent transition-colors"
              >
                Agent Listing Pricing
              </Link>
              <Link 
                href="/directory" 
                className="text-secondary-foreground hover:text-accent transition-colors"
              >
                Agent Directory
              </Link>
            </nav>
            <p className="text-center text-secondary-foreground">
              © 2025 You Probably Need an Agent. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 