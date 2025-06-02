import React from 'react';
import { sampleCoaches } from '../data/sampleData';
import CoachCard from '../components/dashboard/CoachCard';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Calendar, Clock, Users } from 'lucide-react';

const CoachingPage: React.FC = () => {
  const handleScheduleSession = (coachId: string) => {
    console.log('Schedule session with coach:', coachId);
    // TODO: Open scheduling modal/page
  };
  
  // Mock upcoming session
  const upcomingSession = {
    id: 'session-1',
    coachId: 'c1',
    date: new Date('2025-03-25T14:00:00'),
    status: 'scheduled',
  };
  
  const coach = sampleCoaches.find(c => c.id === upcomingSession.coachId);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Coaching Sessions</h1>
      
      {coach && (
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Session</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={coach.imageUrl}
                    alt={coach.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-slate-800">{coach.name}</h3>
                  
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center text-slate-700">
                      <Calendar className="h-4 w-4 mr-2 text-teal-500" />
                      <span>
                        {upcomingSession.date.toLocaleDateString(undefined, {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-slate-700">
                      <Clock className="h-4 w-4 mr-2 text-teal-500" />
                      <span>
                        {upcomingSession.date.toLocaleTimeString(undefined, {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button>Join Session</Button>
                    <Button variant="outline">Reschedule</Button>
                    <Button variant="ghost">Cancel</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-slate-800">Available Coaches</h2>
          
          <div className="flex items-center text-teal-600">
            <Users className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{sampleCoaches.length} coaches available</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {sampleCoaches.map((coach) => (
            <CoachCard
              key={coach.id}
              coach={coach}
              onSchedule={() => handleScheduleSession(coach.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachingPage;