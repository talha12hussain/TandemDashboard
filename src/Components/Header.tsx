import { Menu, Search, Bell } from "lucide-react";

type Props = {
  onMenuClick?: () => void;
};

const Header = ({ onMenuClick }: Props) => {
  return (
    <header className="w-full sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden text-[#15234E]" onClick={onMenuClick}>
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-semibold text-[#15234E]">
            Good Morning, Clara!
          </h2>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
            <Search className="w-5 h-5 text-[#4D43E4]" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
            <Bell className="w-5 h-5 text-[#4D43E4]" />
          </button>
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="User"
            className="w-9 h-9 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
