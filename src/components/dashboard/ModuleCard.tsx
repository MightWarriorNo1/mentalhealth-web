import React from 'react';
import { Module } from '../../types';
import { Card, CardContent } from '../ui/Card';
import { Clock } from 'lucide-react';

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'CBT': return 'bg-blue-100 text-blue-700';
      case 'ACT': return 'bg-purple-100 text-purple-700';
      case 'Mindfulness': return 'bg-teal-100 text-teal-700';
      case 'Education': return 'bg-amber-100 text-amber-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <Card className="h-full transition-all duration-200 hover:shadow-lg cursor-pointer" onClick={onClick}>
      <div className="relative h-40 overflow-hidden">
        <img 
          src={module.imageUrl} 
          alt={module.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(module.type)}`}>
            {module.type}
          </span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-slate-800 mb-2">{module.title}</h3>
        <p className="text-sm text-slate-600 mb-3">{module.description}</p>
        
        <div className="flex items-center text-xs text-slate-500">
          <Clock className="h-3 w-3 mr-1" />
          <span>{module.duration} minutes</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;