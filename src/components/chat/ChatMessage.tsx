import React from 'react';
import { ChatMessage as ChatMessageType } from '../../types';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] sm:max-w-[70%] px-4 py-3 rounded-lg ${
          isUser
            ? 'bg-teal-500 text-white rounded-br-none'
            : 'bg-slate-100 text-slate-800 rounded-bl-none'
        }`}
      >
        <p className="text-sm sm:text-base">{message.content}</p>
        <p className={`text-xs mt-1 ${isUser ? 'text-teal-100' : 'text-slate-500'}`}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;