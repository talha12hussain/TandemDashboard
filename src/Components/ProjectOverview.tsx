import React from 'react';
import { FolderCheck, ShieldCheck, TimerReset } from 'lucide-react';

const overview = [
  {
    icon: <FolderCheck className="h-5 w-5 text-emerald-500" />,
    label: 'Active Projects',
    value: '12',
    circleBg: 'bg-emerald-100',
    circleText: 'text-emerald-600',
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-orange-500" />,
    label: 'Approval Rate',
    value: '87%',
    circleBg: 'bg-orange-100',
    circleText: 'text-orange-600',
  },
  {
    icon: <TimerReset className="h-5 w-5 text-indigo-500" />,
    label: 'Avg Time To Complete',
    value: '3.8 Days',
    circleBg: 'bg-indigo-100',
    circleText: 'text-indigo-600',
  },
];

const ProjectOverview = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4 border border-gray-200">
      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
        <FolderCheck className="h-4 w-4" />
        Project Overview
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {overview.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-1">
            <div className="mb-1">{item.icon}</div>

            {/* Circle Around Number */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg ${item.circleBg} ${item.circleText}`}
            >
              {item.value}
            </div>

            <p className="text-sm text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectOverview;
