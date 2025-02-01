import React, { useEffect, useState } from 'react';
import { Badge, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { Agent } from '../types/Agent';
import { getAgentById } from '../services/agentService'; // You'll need to create this

const AgentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
    navigate('/directory');
  };

  if (loading) {
    return (
      <Container className="py-4">
        <div>Loading...</div>
      </Container>
    );
  }

  if (error || !agent) {
    return (
      <Container className="py-4">
        <div className="text-danger">{error || 'Agent not found'}</div>
        <button 
          className="btn btn-primary mt-3" 
          onClick={handleBack}
        >
          Back to Directory
        </button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Row>
        <Col md={8}>
          <h1 className="mb-3">{agent.name}</h1>
          <div className="mb-3">
            <Badge bg="primary" className="me-2">{agent.category}</Badge>
            <Badge bg="secondary">{agent.industry}</Badge>
          </div>
          <img 
            src={agent.image} 
            alt={agent.name} 
            className="img-fluid mb-4" 
            style={{ maxHeight: '400px' }}
          />
          
          <h3>Primary Use Case</h3>
          <p>{agent.primaryUseCase}</p>
          
          <h3>Problem Solved</h3>
          <p>{agent.problemSolved}</p>
          
          <h3>Key Features</h3>
          <ListGroup className="mb-4">
            {agent.keyFeatures.map((feature, index) => (
              <ListGroup.Item key={index}>{feature}</ListGroup.Item>
            ))}
          </ListGroup>
          
          <h3>Pricing Model</h3>
          <Badge bg="info" className="fs-6">{agent.pricingModel}</Badge>
          
          <div className="mt-4">
            <button 
              className="btn btn-secondary" 
              onClick={handleBack}
            >
              Back to Directory
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AgentDetails; 