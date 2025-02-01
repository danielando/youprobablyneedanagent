import React from 'react';
import AgentCard from './AgentCard';
import { Agent } from '@/app/types/Agent';

interface AgentListProps {
  agents: Agent[];
}

const AgentList: React.FC<AgentListProps> = ({ agents }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default AgentList; 