import { Menu, Search, Bell } from 'lucide-react';

type Props = {
  onMenuClick?: () => void;
};

const Header = ({ onMenuClick }: Props) => {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-3 sticky top-0 z-30 md:ml-64 border-b">
      {/* Left side */}
      <div className="flex items-center space-x-4">
        <button className="md:hidden text-[#15234E]" onClick={onMenuClick}>
          <Menu className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-semibold text-[#15234E]">
          Good Morning, Clara!
        </h2>
      </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-4">
        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
          <Search className="w-4 h-4 text-[#4D43E4]" />
        </button>
        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
          <Bell className="w-4 h-4 text-[#4D43E4]" />
        </button>
        <img
          src="https://i.pravatar.cc/150?img=32" // Replace with actual user image URL
          alt="User"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
