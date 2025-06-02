import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sampleAssessment } from '../data/sampleData';
import AssessmentForm from '../components/assessment/AssessmentForm';
import { AssessmentResponse } from '../types';

const OnboardingPage: React.FC = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  
  const handleAssessmentComplete = (responses: AssessmentResponse[]) => {
    console.log('Assessment responses:', responses);
    
    // Simulate processing time for the assessment
    setTimeout(() => {
      // Navigate to dashboard after completing the assessment
      navigate('/dashboard');
    }, 3000);
  };
  
  const renderWelcome = () => {
    return (
      <div className="text-center max-w-md mx-auto">
        <div className="h-20 w-20 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6"></div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Welcome to MindfulJourney</h1>
        <p className="text-slate-600 mb-8">
          Your personal mental wellness companion. We'll help you improve your well-being through personalized guidance, tools, and support.
        </p>
        <button
          onClick={() => setStep(1)}
          className="px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Get Started
        </button>
      </div>
    );
  };
  
  const renderAssessment = () => {
    return (
      <div>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Initial Assessment</h1>
          <p className="text-slate-600">
            Please answer the following questions honestly to help us create your personalized plan.
          </p>
        </div>
        
        <AssessmentForm
          assessment={sampleAssessment}
          onComplete={handleAssessmentComplete}
        />
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm p-8">
          {step === 0 ? renderWelcome() : renderAssessment()}
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;