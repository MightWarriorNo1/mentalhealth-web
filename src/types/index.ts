export interface User {
  id: string;
  name: string;
  email: string;
  plan?: PersonalizedPlan;
}

export interface Assessment {
  id: string;
  title: string;
  description: string;
  questions: AssessmentQuestion[];
}

export interface AssessmentQuestion {
  id: string;
  text: string;
  type: 'scale' | 'multiple-choice' | 'text';
  options?: string[];
  min?: number;
  max?: number;
  minLabel?: string;
  maxLabel?: string;
}

export interface AssessmentResponse {
  questionId: string;
  response: string | number;
}

export interface PersonalizedPlan {
  id: string;
  userId: string;
  summary: string;
  recommendedModules: string[];
  recommendedTrackers: string[];
  createdAt: Date;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  type: 'CBT' | 'ACT' | 'Mindfulness' | 'Education';
  content: string;
  imageUrl: string;
  duration: number; // in minutes
}

export interface TrackerEntry {
  id: string;
  userId: string;
  type: 'mood' | 'sleep' | 'activity' | 'thought';
  value: number | string;
  note?: string;
  timestamp: Date;
}

export interface CoachSession {
  id: string;
  userId: string;
  coachId: string;
  date: Date;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface Coach {
  id: string;
  name: string;
  specialization: string[];
  bio: string;
  imageUrl: string;
  availability: Date[];
}

export interface ChatMessage {
  id: string;
  userId: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}