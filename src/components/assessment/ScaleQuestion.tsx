import React from 'react';
import { AssessmentQuestion } from '../../types';

interface ScaleQuestionProps {
  question: AssessmentQuestion;
  value: number;
  onChange: (value: number) => void;
}

const ScaleQuestion: React.FC<ScaleQuestionProps> = ({ question, value, onChange }) => {
  const min = question.min || 0;
  const max = question.max || 10;
  const range = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  return (
    <div className="mb-8">
      <p className="text-lg font-medium text-slate-800 mb-4">{question.text}</p>
      
      <div className="mt-6">
        <div className="flex justify-between mb-2 text-sm text-slate-600">
          <span>{question.minLabel || min}</span>
          <span>{question.maxLabel || max}</span>
        </div>
        
        <div className="flex justify-between gap-1">
          {range.map((num) => (
            <button
              key={num}
              onClick={() => onChange(num)}
              className={`
                flex-1 h-12 rounded-md text-sm font-medium transition-all
                ${value === num 
                  ? 'bg-teal-500 text-white transform scale-105 shadow-md' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}
              `}
            >
              {num}
            </button>
          ))}
        </div>
        
        <div className="flex justify-between mt-2 text-xs text-slate-500">
          {question.minLabel && <span>{question.minLabel}</span>}
          {question.maxLabel && <span className="ml-auto">{question.maxLabel}</span>}
        </div>
      </div>
    </div>
  );
};

export default ScaleQuestion;