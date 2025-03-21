
import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle } from 'lucide-react';

export type Option = {
  id: string;
  text: string;
};

export type QuestionType = {
  id: string;
  text: string;
  options: Option[];
};

interface QuestionProps {
  question: QuestionType;
  onAnswer: (questionId: string, optionId: string) => void;
  selectedOption?: string;
  isActive: boolean;
  index: number;
  total: number;
}

const Question: React.FC<QuestionProps> = ({
  question,
  onAnswer,
  selectedOption,
  isActive,
  index,
  total
}) => {
  const [animationClass, setAnimationClass] = useState('opacity-0');
  const [expandedOption, setExpandedOption] = useState<string | null>(null);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setAnimationClass('animate-scale-in');
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setAnimationClass('opacity-0');
    }
  }, [isActive]);

  const handleOptionHover = (optionId: string) => {
    if (!selectedOption) {
      setExpandedOption(optionId);
    }
  };

  const handleOptionLeave = () => {
    setExpandedOption(null);
  };

  const handleOptionSelect = (optionId: string) => {
    if (!selectedOption) {
      onAnswer(question.id, optionId);
    }
  };

  if (!isActive) return null;

  return (
    <div className={`w-full ${animationClass}`}>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-medium">Question {index + 1}</h2>
        <div className="text-sm text-muted-foreground">{index + 1} of {total}</div>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-medium mb-1">{question.text}</h3>
        <p className="text-muted-foreground">Please select the most appropriate answer.</p>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.id;
          const isExpanded = expandedOption === option.id;
          
          return (
            <div
              key={option.id}
              className={`p-4 border rounded-lg transition-all duration-300 ${
                isSelected
                  ? 'border-primary bg-primary/5'
                  : isExpanded
                  ? 'border-muted-foreground/30 bg-secondary/80 shadow-sm'
                  : 'border-border hover:border-muted-foreground/30 hover:bg-secondary/80'
              }`}
              onMouseEnter={() => handleOptionHover(option.id)}
              onMouseLeave={handleOptionLeave}
              onClick={() => handleOptionSelect(option.id)}
            >
              <div className="flex items-center">
                <div className="mr-3">
                  {isSelected ? (
                    <CheckCircle className="h-5 w-5 text-primary" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground/40" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${isSelected ? 'text-primary' : ''}`}>{option.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
