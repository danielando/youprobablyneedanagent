// This would be replaced with actual API calls in production
let votesStorage: Record<string, Set<string>> = {};

export const voteService = {
  vote: async (agentId: string, userId: string): Promise<number> => {
    if (!votesStorage[agentId]) {
      votesStorage[agentId] = new Set();
    }
    
    const hasVoted = votesStorage[agentId].has(userId);
    if (hasVoted) {
      votesStorage[agentId].delete(userId);
    } else {
      votesStorage[agentId].add(userId);
    }
    
    return votesStorage[agentId].size;
  },

  getVoteCount: async (agentId: string): Promise<number> => {
    return votesStorage[agentId]?.size || 0;
  },

  hasVoted: async (agentId: string, userId: string): Promise<boolean> => {
    return votesStorage[agentId]?.has(userId) || false;
  }
}; 