import { Building2 } from 'lucide-react';

const scores = [
  { stage: 'Intake', score: 8.7, satisfiedCount: 45, total: 48 },
  { stage: 'Swiper', score: 8.3, satisfiedCount: 42, total: 45 },
  { stage: 'Scraper', score: 8.5, satisfiedCount: 38, total: 42 },
  { stage: 'Complete', score: 9.1, satisfiedCount: 35, total: 38 },
];

const SatisfactionSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4 border border-gray-200">
      <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
        <Building2 className="h-4 w-4" />
        Customer Satisfaction
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
       {scores.map((s) => (
  <div
    className={`p-4 rounded-xl border text-center transition ${
      s.stage === 'Complete' ? 'border-[3px]' : 'border'
    }`}
    style={{ borderColor: s.stage === 'Complete' ? '#4D43E4' : '#E5E7EB' }}
  >
    <p className="text-sm text-gray-500">{s.stage}</p>
    <h3 className="text-xl font-bold">{s.score}/10</h3>
    <p className="text-xs text-gray-400">
      {s.satisfiedCount}/{s.total} Satisfied
    </p>
  </div>
))}

      </div>
    </div>
  );
};

export default SatisfactionSection;
