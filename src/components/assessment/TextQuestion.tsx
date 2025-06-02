import React from 'react';
import { AssessmentQuestion } from '../../types';

interface TextQuestionProps {
  question: AssessmentQuestion;
  value: string;
  onChange: (value: string) => void;
}

const TextQuestion: React.FC<TextQuestionProps> = ({ question, value, onChange }) => {
  return (
    <div className="mb-8">
      <p className="text-lg font-medium text-slate-800 mb-4">{question.text}</p>
      
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
        placeholder="Type your answer here..."
      />
    </div>
  );
};

export default TextQuestion;