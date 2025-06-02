import React from 'react';

interface ProgressChartProps {
  data: { label: string; value: number }[];
  maxValue?: number;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ 
  data,
  maxValue = 10
}) => {
  return (
    <div className="py-4">
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700">{item.label}</span>
              <span className="text-sm text-slate-500">{item.value}/{maxValue}</span>
            </div>
            
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-teal-500 rounded-full transition-all duration-300 ease-out"
                style={{ 
                  width: `${(item.value / maxValue) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressChart;