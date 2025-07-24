import { Menu, Search, Bell } from "lucide-react";

type Props = {
  onMenuClick?: () => void;
};

const Header = ({ onMenuClick }: Props) => {
  return (
    <header className="w-full sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4">
        {/* Left side */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          <button
            className="md:hidden text-[#15234E] p-1"
            onClick={onMenuClick}
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <h2 className="text-sm sm:text-base md:text-2xl font-semibold text-[#15234E]">
            Good Morning, Clara!
          </h2>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#4D43E4]" />
          </button>
          <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#4D43E4]" />
          </button>
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="User"
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
