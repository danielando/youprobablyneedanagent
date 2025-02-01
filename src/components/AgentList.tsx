import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AgentCard from './AgentCard';
import { Agent } from '@/app/types/Agent';

const AgentList: React.FC = () => {
  // This is example data - replace with your actual data source
  const agents: Agent[] = [
    {
      id: "1",
      name: "CodeCopilot Pro",
      description: "This is a test agent",
      image: "/path/to/image1.jpg",
      category: "Category 1",
      industry: "Industry 1",
      primaryUseCase: "Primary use case 1",
      problemSolved: "Problem solved 1",
      keyFeatures: ["Feature 1", "Feature 2"],
      pricingModel: "Free"
    },
    {
      id: "2",
      name: "WriteWise",
      description: "This is another test agent",
      image: "/path/to/image2.jpg",
      category: "Category 2",
      industry: "Industry 2",
      primaryUseCase: "Primary use case 2",
      problemSolved: "Problem solved 2",
      keyFeatures: ["Feature 3", "Feature 4"],
      pricingModel: "Freemium"
    }
  ];

  return (
    <Container className="py-4">
      <Row xs={1} md={2} lg={3} className="g-4">
        {agents.map((agent) => (
          <Col key={agent.id}>
            <AgentCard agent={agent} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AgentList; 