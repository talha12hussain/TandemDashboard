import { ArrowRight } from "lucide-react";

const metrics = [
  {
    value: "73%",
    label: "Across all projects",
    badge: "+4.5%",
    badgeColor: "bg-green-100 text-green-600",
    bg: "bg-white",
    textColor: "text-gray-900",
    subText: "text-gray-500",
    iconBg: "bg-gray-100",
  },
  {
    value: "4.2 days",
    label: "Average Time",
    badge: "23% faster this month",
    badgeColor: "bg-green-100 text-green-600",
    bg: "bg-white",
    textColor: "text-gray-900",
    subText: "text-gray-500",
    iconBg: "bg-gray-100",
  },
  {
    value: "71%",
    label: "Conversion Rate",
    badge: "32 clients converted",
    badgeColor: "bg-white/30 text-white",
    bg: "bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500",
    textColor: "text-white",
    subText: "text-white/80",
    iconBg: "bg-white/20",
  },
];

const MetricCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`${metric.bg} rounded-2xl shadow-sm p-5 flex flex-col justify-between relative overflow-hidden`}
        >
          {/* Top section: badge */}
          <div className="mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${metric.badgeColor}`}
            >
              {metric.badge}
            </span>
          </div>

          {/* Main value */}
          <div>
            <h3 className={`text-2xl font-bold ${metric.textColor}`}>
              {metric.value}
            </h3>
            <p className={`text-sm mt-1 ${metric.subText}`}>{metric.label}</p>
          </div>

          {/* Bottom-right arrow button */}
          <button
            className={`absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center rounded-full ${metric.iconBg}`}
          >
            <ArrowRight
              className={`w-4 h-4 ${
                metric.textColor === "text-white" ? "text-white" : "text-gray-500"
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MetricCards;
