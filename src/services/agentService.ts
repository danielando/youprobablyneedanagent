import { Agent } from '../types/Agent';

export const getAgentById = async (id: string): Promise<Agent> => {
  // Replace this with your actual API call
  // For now, we'll simulate an API call
  const response = await fetch(`/api/agents/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch agent');
  }
  return response.json();
}; 