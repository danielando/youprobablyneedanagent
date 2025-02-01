'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  agentId: string;
  initialRating: number;
  readonly?: boolean;
  size?: 'sm' | 'md';
}

export function StarRating({ agentId, initialRating, readonly = false, size = 'md' }: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  const handleRating = (value: number) => {
    if (readonly) return;
    setRating(value);
    setHasRated(true);
    // Here you would typically send the rating to your backend
    console.log(`Rating ${value} stars for agent ${agentId}`);
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          className={`p-0.5 transition-colors ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}`}
          onMouseEnter={() => !readonly && setHoveredRating(star)}
          onMouseLeave={() => !readonly && setHoveredRating(0)}
          onClick={() => handleRating(star)}
        >
          <Star
            className={`${size === 'sm' ? 'h-3 w-3' : 'h-5 w-5'} transition-colors ${
              (hoveredRating ? star <= hoveredRating : star <= rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        </button>
      ))}
      {!readonly && (
        <span className={`ml-2 ${size === 'sm' ? 'text-xs' : 'text-sm'} text-muted-foreground`}>
          {hasRated ? 'Thanks for rating!' : 'Rate this agent'}
        </span>
      )}
    </div>
  );
} 