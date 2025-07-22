import { PieChart, Pie, Cell } from 'recharts';
import { Palette } from 'lucide-react';

const data = [
  { name: 'Warm Minimalist', value: 73 },
  { name: 'Other', value: 27 },
];

const COLORS = ['#6366F1', '#E5E7EB'];

const TasteTrends = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200 h-full">
      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-2">
        <Palette className="h-4 w-4" />
        Taste Trends
      </div>
      <p className="text-sm text-gray-500 mb-2">
        This week, <span className="font-semibold text-gray-800">73%</span> of clients chose
      </p>

      <div className="flex justify-center">
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>

      <p className="text-center text-sm font-semibold text-gray-700 mt-2">
        Warm Minimalist
      </p>
    </div>
  );
};

export default TasteTrends;
