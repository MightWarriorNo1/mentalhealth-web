import React from 'react';
import { Coach } from '../../types';
import { Card, CardContent } from '../ui/Card';
import Button from '../ui/Button';

interface CoachCardProps {
  coach: Coach;
  onSchedule: () => void;
}

const CoachCard: React.FC<CoachCardProps> = ({ coach, onSchedule }) => {
  return (
    <Card className="h-full">
      <div className="p-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0">
          <img
            src={coach.imageUrl}
            alt={coach.name}
            className="w-24 h-24 rounded-full object-cover mx-auto sm:mx-0"
          />
        </div>
        
        <div className="flex-grow">
          <h3 className="font-semibold text-lg text-slate-800">{coach.name}</h3>
          
          <div className="mt-1 flex flex-wrap gap-1">
            {coach.specialization.map((specialty, index) => (
              <span 
                key={index}
                className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-full text-xs"
              >
                {specialty}
              </span>
            ))}
          </div>
          
          <p className="mt-2 text-sm text-slate-600 line-clamp-2">{coach.bio}</p>
          
          <div className="mt-3">
            <Button size="sm" onClick={onSchedule}>
              Schedule Session
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CoachCard;