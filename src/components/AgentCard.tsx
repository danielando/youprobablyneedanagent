import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Agent } from '@/app/types/Agent';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const router = useRouter();

  const handleLearnMore = () => {
    console.log('Navigating to agent:', agent.id);
    router.push(`/directory/agent/${agent.id}`);
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span>{agent.name}</span>
          <span className="text-sm font-normal text-muted-foreground">
            {agent.pricingModel}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{agent.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">{agent.category}</Badge>
          <Badge variant="outline">{agent.industry}</Badge>
        </div>
        <Button 
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-accent hover:text-white transition-colors"
          onClick={handleLearnMore}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AgentCard; 