import { ArrowRight, TrendingUp } from "lucide-react";
import TagIcon from "../assets/Chart (3).png";

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
  return (
    <div
      className={`relative rounded-[28px] px-6 py-6 min-h-[170px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]
        ${
          gradient
            ? "bg-gradient-to-br from-[#4D43E4] to-[#847DECB0] text-white shadow-[0_16px_40px_rgba(139,110,245,0.35)]"
            : "bg-white text-gray-900 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
        }`}
    >
      {/* Badge Wrapper */}
      <div className="flex items-center gap-2">
        {/* Left White Circle Icon */}
        <span className="w-[28px] h-[28px] flex justify-center items-center rounded-full">
          <img src={TagIcon} alt="icon" className="w-full h-full object-contain" />
        </span>

        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-[6px] rounded-full text-[11px] font-medium
            ${
              gradient
                ? "bg-white/60 text-[#4D43E4]"
                : "bg-green-100 text-green-800"
            }`}
        >
          {/* Badge Icon */}
          <span className={`flex items-center justify-center text-xs ${gradient ? "text-white" : "text-green-600"}`}>
            {badgeIcon}
          </span>

          {/* Badge Text */}
          <span className={gradient ? "text-white" : "text-green-700"}>
            {badgeText}
          </span>
        </div>
      </div>

      {/* Value & Label */}
      <div className="mt-6">
        <h3 className="text-[32px] font-bold leading-tight">{value}</h3>
        <p className={`text-[14px] mt-1 ${gradient ? "text-white/80" : "text-gray-500"}`}>
          {label}
        </p>
      </div>

      {/* Arrow Button */}
      <div
        className={`absolute bottom-6 right-6 w-[44px] h-[44px] rounded-full flex items-center justify-center cursor-pointer
          ${
            gradient
              ? "bg-white/25 hover:bg-white/35 backdrop-blur-md"
              : "bg-gray-100 hover:bg-gray-200"
          } transition`}
      >
        <ArrowRight className={`w-[18px] h-[18px] -rotate-30 ${gradient ? "text-white" : "text-gray-700"}`} />
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
        badgeIcon={<TrendingUp className="w-[14px] h-[14px]" />}
      />
      <MetricCard
        value="71%"
        label="Conversion Rate"
        badgeText="32 clients converted"
        badgeIcon={<TrendingUp className="w-[14px] h-[14px]" />}
        gradient
      />
    </div>
  );
};

export default MetricCards;