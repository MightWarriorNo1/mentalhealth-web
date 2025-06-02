import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import ProgressChart from '../components/dashboard/ProgressChart';
import ModuleCard from '../components/dashboard/ModuleCard';
import { mockedUserPlan, sampleModules } from '../data/sampleData';
import { Activity, Calendar, TrendingUp, BookOpen } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [selectedModules] = useState(() => {
    return sampleModules.filter(module => 
      mockedUserPlan.recommendedModules.includes(module.id)
    );
  });
  
  const moodData = [
    { label: 'Mon', value: 6 },
    { label: 'Tue', value: 5 },
    { label: 'Wed', value: 7 },
    { label: 'Thu', value: 6 },
    { label: 'Fri', value: 8 },
    { label: 'Sat', value: 8 },
    { label: 'Sun', value: 7 },
  ];
  
  const progressData = [
    { label: 'Modules Completed', value: 4, maxValue: 10 },
    { label: 'Journaling Streak', value: 5, maxValue: 7 },
    { label: 'Mindfulness Minutes', value: 45, maxValue: 60 },
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Your Dashboard</h1>
      
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Your Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">{mockedUserPlan.summary}</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center">
              <div className="p-2 rounded-md bg-blue-100 text-blue-600 mr-3">
                <Activity className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Mood Average</p>
                <p className="text-2xl font-semibold text-slate-800">7.1/10</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center">
              <div className="p-2 rounded-md bg-teal-100 text-teal-600 mr-3">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Days Active</p>
                <p className="text-2xl font-semibold text-slate-800">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center">
              <div className="p-2 rounded-md bg-amber-100 text-amber-600 mr-3">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Modules Completed</p>
                <p className="text-2xl font-semibold text-slate-800">4/10</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center">
              <div className="p-2 rounded-md bg-purple-100 text-purple-600 mr-3">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Weekly Progress</p>
                <p className="text-2xl font-semibold text-slate-800">+12%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Mood Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <div className="flex justify-between h-full items-end pb-4">
                {moodData.map((day, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div 
                      className="w-10 rounded-t-md bg-teal-500 transition-all duration-500"
                      style={{ 
                        height: `${(day.value / 10) * 100}%`,
                        opacity: 0.6 + (day.value / 25)
                      }}
                    ></div>
                    <span className="text-xs text-slate-500 mt-2">{day.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ProgressChart data={progressData} />
          </CardContent>
        </Card>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Recommended Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedModules.map(module => (
            <ModuleCard 
              key={module.id} 
              module={module} 
              onClick={() => console.log('Open module', module.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;