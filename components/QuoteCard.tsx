import React from 'react';

interface QuoteCardProps {
  quote: string;
  source: string;
  character: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, source, character }) => {
  return (
    <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 flex flex-col justify-between transform hover:scale-105">
      <div>
        <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-4">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      <div className="text-right text-gray-600 text-sm font-light">
        <p className="mb-1">出典: 『{source}』</p>
        <p>― {character}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
