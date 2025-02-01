import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Agent } from '@/app/types/Agent';
import { getAgentById } from '@/app/services/agentService'; // You'll need to create this

const AgentDetails: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter();
  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Agent ID:', id); // Debug log
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

  const handleBack = () => {
    router.push('/directory');
  };

  if (loading) {
    return (
      <div className="container mx-auto py-4">
        <div>Loading...</div>
      </div>
    );
  }

  if (error || !agent) {
    return (
      <div className="container mx-auto py-4">
        <div className="text-danger">{error || 'Agent not found'}</div>
        <button 
          className="btn btn-primary mt-3" 
          onClick={handleBack}
        >
          Back to Directory
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-4">
      <div className="row">
        <div className="col-md-8">
          <h1 className="mb-3">{agent.name}</h1>
          <div className="mb-3">
            <span className="badge bg-primary me-2">{agent.category}</span>
            <span className="badge bg-secondary">{agent.industry}</span>
          </div>
          <div className="relative w-full aspect-square">
            <Image 
              src={agent.image} 
              alt={agent.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <h3>Primary Use Case</h3>
          <p>{agent.primaryUseCase}</p>
          
          <h3>Problem Solved</h3>
          <p>{agent.problemSolved}</p>
          
          <h3>Key Features</h3>
          <ul className="list-group mb-4">
            {agent.keyFeatures.map((feature, index) => (
              <li key={index} className="list-group-item">{feature}</li>
            ))}
          </ul>
          
          <h3>Pricing Model</h3>
          <span className="badge bg-info fs-6">{agent.pricingModel}</span>
          
          <div className="mt-4">
            <button 
              className="btn btn-secondary" 
              onClick={handleBack}
            >
              Back to Directory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails; 