import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AgentList from './components/AgentList';
import { Agent } from '@/app/types/Agent';

const App: React.FC = () => {
  // Use the same mock data structure as in your agentService
  const agents: Agent[] = [
    {
      id: "1",
      name: "CodeCopilot Pro",
      description: "Advanced coding assistant with real-time suggestions and code review capabilities.",
      image: "/placeholder.svg",
      category: "Development",
      industry: "Technology",
      primaryUseCase: "Code Development and Review",
      problemSolved: "Speeds up coding process and reduces bugs",
      keyFeatures: [
        "Real-time code suggestions",
        "Automated code review",
        "Multi-language support",
        "Integration with popular IDEs"
      ],
      websiteUrl: "https://github.com/features/copilot",
      pricingModel: "Freemium"
    },
    // ... you can add more agents here
  ];

  return <AgentList agents={agents} />;
};

export default App; 