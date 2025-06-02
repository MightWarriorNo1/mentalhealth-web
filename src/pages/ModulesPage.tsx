import React, { useState } from 'react';
import { sampleModules } from '../data/sampleData';
import ModuleCard from '../components/dashboard/ModuleCard';
import { Search, Filter } from 'lucide-react';

const ModulesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
  const moduleTypes = ['All', 'CBT', 'ACT', 'Mindfulness', 'Education'];
  
  const filteredModules = sampleModules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           module.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === null || selectedType === 'All' || module.type === selectedType;
    
    return matchesSearch && matchesType;
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Learning Modules</h1>
      
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search modules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <Filter className="h-5 w-5 text-slate-500" />
          {moduleTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type === 'All' ? null : type)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                (type === 'All' && selectedType === null) || type === selectedType
                  ? 'bg-teal-100 text-teal-800'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      
      {filteredModules.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-500">No modules found matching your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              onClick={() => {
                console.log('Module clicked:', module.id);
                // TODO: Navigate to module detail page
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ModulesPage;