import React, { useState, useEffect } from 'react';
import ChatInterface from '../components/chat/ChatInterface';
import { ChatMessage } from '../types';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Add welcome message when chat is first opened
    if (messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        userId: 'system',
        content: "Hello! I'm your mental wellness assistant. How are you feeling today? I'm here to support you, answer questions, or just chat.",
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages([welcomeMessage]);
    }
  }, []);
  
  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      userId: 'user-1',
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      generateResponse(content);
    }, 1500);
  };
  
  const generateResponse = (userMessage: string) => {
    let responseContent = '';
    
    // Simple response logic based on user message content
    const lowercaseMessage = userMessage.toLowerCase();
    
    if (lowercaseMessage.includes('anxious') || lowercaseMessage.includes('anxiety')) {
      responseContent = "I'm sorry to hear you're feeling anxious. Remember to take slow, deep breaths. It might help to try the 5-4-3-2-1 grounding technique: acknowledge 5 things you see, 4 things you feel, 3 things you hear, 2 things you smell, and 1 thing you taste.";
    } else if (lowercaseMessage.includes('sad') || lowercaseMessage.includes('depressed')) {
      responseContent = "I'm sorry you're feeling down. It's important to acknowledge your feelings. Would you like to explore some mood-lifting activities or perhaps check out our depression management module?";
    } else if (lowercaseMessage.includes('happy') || lowercaseMessage.includes('good')) {
      responseContent = "I'm glad to hear you're feeling good! It's great to acknowledge positive moments. Would you like to record this in your mood tracker to look back on later?";
    } else if (lowercaseMessage.includes('sleep') || lowercaseMessage.includes('tired')) {
      responseContent = "Sleep is so important for mental health. Our sleep hygiene module has some excellent tips for improving sleep quality. Would you like me to recommend some bedtime relaxation exercises?";
    } else if (lowercaseMessage.includes('stress') || lowercaseMessage.includes('overwhelmed')) {
      responseContent = "When you're feeling overwhelmed, it can help to break things down into smaller, manageable steps. Maybe try a quick 5-minute mindfulness exercise to center yourself?";
    } else {
      responseContent = "Thank you for sharing. How else can I support you today? I'm here to listen, suggest coping strategies, or guide you to relevant resources in your personalized plan.";
    }
    
    const aiMessage: ChatMessage = {
      id: `ai-${Date.now()}`,
      userId: 'system',
      content: responseContent,
      sender: 'ai',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">AI Assistant</h1>
      
      <Card className="h-[calc(100vh-200px)]">
        <CardHeader className="border-b border-slate-100">
          <CardTitle>Your Wellness Assistant</CardTitle>
        </CardHeader>
        <CardContent className="p-0 h-[calc(100%-70px)]">
          <ChatInterface
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatPage;