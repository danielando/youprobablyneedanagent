'use client';

import { useState } from 'react';
import { ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { voteService } from '@/app/services/voteService';

interface VoteButtonProps {
  agentId: string;
  initialVotes: number;
  initialHasVoted: boolean;
}

export function VoteButton({ agentId, initialVotes, initialHasVoted }: VoteButtonProps) {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(initialHasVoted);
  const [isLoading, setIsLoading] = useState(false);

  const handleVote = async () => {
    try {
      setIsLoading(true);
      // In production, you'd get the real user ID from your auth system
      const userId = 'test-user';
      const newVoteCount = await voteService.vote(agentId, userId);
      setVotes(newVoteCount);
      setHasVoted(!hasVoted);
    } catch (error) {
      console.error('Failed to vote:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={hasVoted ? "default" : "outline"}
      size="sm"
      className={`gap-2 ${hasVoted ? 'bg-accent text-white' : ''}`}
      onClick={handleVote}
      disabled={isLoading}
    >
      <ThumbsUp className={`h-4 w-4 ${hasVoted ? 'fill-current' : ''}`} />
      <span>{votes}</span>
    </Button>
  );
} 