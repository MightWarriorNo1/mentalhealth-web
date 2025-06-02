import React, { useState } from 'react';
import { Assessment, AssessmentResponse } from '../../types';
import ScaleQuestion from './ScaleQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import TextQuestion from './TextQuestion';
import Button from '../ui/Button';
import { CheckCircle } from 'lucide-react';

interface AssessmentFormProps {
  assessment: Assessment;
  onComplete: (responses: AssessmentResponse[]) => void;
}

const AssessmentForm: React.FC<AssessmentFormProps> = ({ assessment, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<Record<string, string | number | string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const totalSteps = assessment.questions.length;
  const currentQuestion = assessment.questions[currentStep];
  
  const updateResponse = (value: string | number | string[]) => {
    setResponses(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const goToPreviousStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
  };

  const goToNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    setIsSubmitting(true);
    
    // Format responses for submission
    const formattedResponses = Object.entries(responses).map(([questionId, response]) => ({
      questionId,
      response
    }));
    
    // Simulate API call
    setTimeout(() => {
      onComplete(formattedResponses as AssessmentResponse[]);
      setIsSubmitting(false);
      setIsComplete(true);
    }, 1500);
  };

  if (isComplete) {
    return (
      <div className="text-center py-10">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Assessment Complete!</h2>
        <p className="text-slate-600 mb-6">Thank you for completing the assessment. We're analyzing your responses to create your personalized plan.</p>
        <div className="animate-pulse">
          <p className="text-teal-600 font-medium">Generating your plan...</p>
        </div>
      </div>
    );
  }

  const renderQuestion = () => {
    const value = responses[currentQuestion.id] || (
      currentQuestion.type === 'scale' ? 0 : 
      currentQuestion.type === 'multiple-choice' ? [] : 
      ''
    );

    switch (currentQuestion.type) {
      case 'scale':
        return (
          <ScaleQuestion 
            question={currentQuestion} 
            value={value as number} 
            onChange={(val) => updateResponse(val)} 
          />
        );
      case 'multiple-choice':
        return (
          <MultipleChoiceQuestion 
            question={currentQuestion} 
            value={value as string[]} 
            onChange={(val) => updateResponse(val)} 
          />
        );
      case 'text':
        return (
          <TextQuestion 
            question={currentQuestion} 
            value={value as string} 
            onChange={(val) => updateResponse(val)} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-slate-700">
            Question {currentStep + 1} of {totalSteps}
          </h3>
          <span className="text-sm text-slate-500">
            {Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete
          </span>
        </div>
        
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div 
            className="bg-teal-500 h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {renderQuestion()}

      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={goToPreviousStep}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        
        <Button
          onClick={goToNextStep}
          isLoading={isSubmitting}
        >
          {currentStep < totalSteps - 1 ? 'Next' : 'Complete'}
        </Button>
      </div>
    </div>
  );
};

export default AssessmentForm;