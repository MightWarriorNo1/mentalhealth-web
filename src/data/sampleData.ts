import { Assessment, Module, Coach } from '../types';

export const sampleAssessment: Assessment = {
  id: 'initial-assessment',
  title: 'Initial Wellness Assessment',
  description: 'This assessment helps us understand your current mental well-being and create a personalized plan for you.',
  questions: [
    {
      id: 'q1',
      text: 'Over the past 2 weeks, how often have you felt down, depressed, or hopeless?',
      type: 'scale',
      min: 0,
      max: 4,
      minLabel: 'Not at all',
      maxLabel: 'Nearly every day',
    },
    {
      id: 'q2',
      text: 'Over the past 2 weeks, how often have you had little interest or pleasure in doing things?',
      type: 'scale',
      min: 0,
      max: 4,
      minLabel: 'Not at all',
      maxLabel: 'Nearly every day',
    },
    {
      id: 'q3',
      text: 'How would you rate your current stress level?',
      type: 'scale',
      min: 0,
      max: 10,
      minLabel: 'Very low',
      maxLabel: 'Very high',
    },
    {
      id: 'q4',
      text: 'Which of these challenges are you currently facing?',
      type: 'multiple-choice',
      options: ['Anxiety', 'Depression', 'Sleep issues', 'Work stress', 'Relationship problems', 'Self-esteem', 'Other'],
    },
    {
      id: 'q5',
      text: 'What are your main goals for improving your mental wellbeing?',
      type: 'text',
    },
  ],
};

export const sampleModules: Module[] = [
  {
    id: 'm1',
    title: 'Introduction to CBT',
    description: 'Learn the basics of Cognitive Behavioral Therapy and how it can help manage negative thought patterns.',
    type: 'CBT',
    content: 'This module covers the fundamental principles of CBT...',
    imageUrl: 'https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg',
    duration: 25,
  },
  {
    id: 'm2',
    title: 'Mindful Breathing Techniques',
    description: 'Simple breathing exercises to help reduce anxiety and improve focus.',
    type: 'Mindfulness',
    content: 'In this module, you\'ll learn several breathing techniques...',
    imageUrl: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg',
    duration: 15,
  },
  {
    id: 'm3',
    title: 'Acceptance & Commitment',
    description: 'Introduction to ACT principles for psychological flexibility.',
    type: 'ACT',
    content: 'Acceptance and Commitment Therapy helps you embrace your thoughts and feelings...',
    imageUrl: 'https://images.pexels.com/photos/1557238/pexels-photo-1557238.jpeg',
    duration: 30,
  },
  {
    id: 'm4',
    title: 'Understanding Anxiety',
    description: 'Learn about the causes, symptoms, and management strategies for anxiety.',
    type: 'Education',
    content: 'This educational module explains what happens in your body and mind...',
    imageUrl: 'https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg',
    duration: 20,
  },
];

export const sampleCoaches: Coach[] = [
  {
    id: 'c1',
    name: 'Dr. Sarah Johnson',
    specialization: ['Anxiety', 'Depression', 'CBT'],
    bio: 'Clinical psychologist with 10+ years of experience specializing in anxiety and mood disorders.',
    imageUrl: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg',
    availability: [
      new Date('2025-03-25T10:00:00'),
      new Date('2025-03-25T14:00:00'),
      new Date('2025-03-26T11:00:00'),
    ],
  },
  {
    id: 'c2',
    name: 'Michael Chen, LMHC',
    specialization: ['Stress Management', 'Mindfulness', 'ACT'],
    bio: 'Licensed mental health counselor focused on stress reduction and mindfulness practices.',
    imageUrl: 'https://images.pexels.com/photos/5324967/pexels-photo-5324967.jpeg',
    availability: [
      new Date('2025-03-24T13:00:00'),
      new Date('2025-03-25T15:00:00'),
      new Date('2025-03-27T12:00:00'),
    ],
  },
];

export const mockedUserPlan = {
  id: 'plan-1',
  userId: 'user-1',
  summary: 'Based on your assessment, we recommend focusing on stress management and mindfulness techniques. You may benefit from our CBT modules to address negative thought patterns.',
  recommendedModules: ['m1', 'm2', 'm4'],
  recommendedTrackers: ['mood', 'sleep'],
  createdAt: new Date('2025-03-20T12:00:00'),
};