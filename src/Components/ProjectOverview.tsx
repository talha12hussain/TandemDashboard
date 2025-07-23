import { BarChart } from 'lucide-react';
import FolderCheck from '../assets/Chart (1).png';
import ShieldCheck from '../assets/Chart (2).png';
import TimerReset from '../assets/Chart.png';

const overview = [
  {
    icon: FolderCheck,
    label: 'Active Projects',
    value: '12',
  },
  {
    icon: ShieldCheck,
    label: 'Approval Rate',
    value: '87%',
  },
  {
    icon: TimerReset,
    label: 'Avg Time To Complete',
    value: '3.8 Days',
  },
];

const ProjectOverview = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-5 border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
        <BarChart className="h-4 w-4 text-gray-500" />
        Project Overview
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {overview.map((item, idx) => (
        <div key={idx} className="flex items-center gap-4">
  <img
    src={item.icon}
    alt={item.label}
    className="w-10 h-10 object-contain shrink-0"
  />
  <div className="flex flex-col leading-tight">
    <span className="text-lg font-bold text-gray-900">{item.value}</span>
    <span className="text-sm text-gray-500">{item.label}</span>
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default ProjectOverview;
