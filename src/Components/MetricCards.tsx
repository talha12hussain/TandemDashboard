import {
  ArrowRight,
  TrendingUp,
  Clock3,
  Percent,
} from "lucide-react";
import TagIcon from '../assets/Chart (3).png';

const MetricCard = ({
  value,
  label,
  badgeText,
  badgeIcon,
  gradient = false,
}: {
  value: string;
  label: string;
  badgeText: string;
  badgeIcon: JSX.Element;
  gradient?: boolean;
}) => {
  const isGradient = gradient;

  return (
    <div
      className={`relative rounded-[20px] px-6 py-6 min-h-[140px] flex flex-col justify-between
        ${
          isGradient
            ? "bg-gradient-to-br from-[#8268E5] to-[#A89BEA] text-white shadow-[0_12px_32px_rgba(130,104,229,0.35)]"
            : "bg-white text-gray-900 shadow-[0_6px_18px_rgba(0,0,0,0.06)]"
        }`}
    >
      {/* Badge with green elements */}
      <div
        className={`inline-flex items-center gap-2 px-3 py-[5px] rounded-full text-xs font-medium w-fit
          ${isGradient ? "bg-white/20" : "bg-green-100/60 text-green-800"}
        `}
      >
        {/* Circle Icon with green border */}
        <span
          className={`w-5 h-5 flex items-center justify-center rounded-full border-2 
            ${isGradient ? "border-white/30" : "border-green-500/30 bg-white"}`}
        >
          <img
            src={TagIcon}
            alt="icon"
            className="w-3 h-3 object-contain"
          />
        </span>

        {/* Main Icon - Made green when not gradient */}
        <span className={`w-3.5 h-3.5 flex items-center justify-center 
          ${!isGradient ? "text-green-600" : "text-white"}`}>
          {badgeIcon}
        </span>

        {/* Badge Text - Made green when not gradient */}
        <span className={`leading-none tracking-tight 
          ${!isGradient ? "text-green-800" : "text-white"}`}>
          {badgeText}
        </span>
      </div>

      {/* Value & Label */}
      <div className="mt-4">
        <h3 className="text-[24px] font-semibold leading-tight">{value}</h3>
        <p
          className={`text-sm mt-1 ${
            isGradient ? "text-white/80" : "text-gray-500"
          }`}
        >
          {label}
        </p>
      </div>

      {/* Arrow Button */}
      <div
        className={`absolute bottom-4 right-4 w-[34px] h-[34px] rounded-full flex items-center justify-center
          ${
            isGradient
              ? "bg-white/30 hover:bg-white/40"
              : "bg-gray-100 hover:bg-gray-200"
          } transition`}
      >
        <ArrowRight
          className={`w-[14px] h-[14px] ${
            isGradient ? "text-white" : "text-gray-700"
          }`}
        />
      </div>
    </div>
  );
};

const MetricCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mt-4">
      <MetricCard
        value="73%"
        label="Across all projects"
        badgeText="+4.5%"
        badgeIcon={<TrendingUp className="w-[14px] h-[14px]" />}
      />
      <MetricCard
        value="4.2 days"
        label="Average Time"
        badgeText="25% faster this month"
        badgeIcon={<Clock3 className="w-[14px] h-[14px]" />}
      />
      <MetricCard
        value="71%"
        label="Conversion Rate"
        badgeText="32 clients converted"
        badgeIcon={<Percent className="w-[14px] h-[14px]" />}
        gradient
      />
    </div>
  );
};

export default MetricCards;