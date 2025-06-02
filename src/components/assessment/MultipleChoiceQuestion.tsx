import React from 'react';
import { AssessmentQuestion } from '../../types';

interface MultipleChoiceQuestionProps {
  question: AssessmentQuestion;
  value: string[];
  onChange: (value: string[]) => void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({ 
  question, 
  value, 
  onChange 
}) => {
  const handleSelect = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter(v => v !== option)
      : [...value, option];
    
    onChange(newValue);
  };

  return (
    <div className="mb-8">
      <p className="text-lg font-medium text-slate-800 mb-4">{question.text}</p>
      
      <div className="space-y-3">
        {question.options?.map((option) => (
          <label 
            key={option}
            className={`
              flex items-center p-4 rounded-md cursor-pointer transition-colors
              ${value.includes(option) 
                ? 'bg-teal-50 border border-teal-200' 
                : 'bg-white border border-slate-200 hover:bg-slate-50'}
            `}
          >
            <input
              type="checkbox"
              className="h-5 w-5 text-teal-500 rounded focus:ring-teal-400 border-slate-300"
              checked={value.includes(option)}
              onChange={() => handleSelect(option)}
            />
            <span className="ml-3 text-slate-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;