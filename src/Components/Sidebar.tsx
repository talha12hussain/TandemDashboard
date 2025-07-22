// src/Components/Sidebar.tsx
import React from 'react';
import {
  FileText,
  BarChart,
  Layout,
  Star,
  File,
  LogOut,
  X,
} from 'lucide-react';
import { Icon } from '@iconify/react';
import appsIcon from '@iconify/icons-uim/apps'; // fi-rr-apps-style icon
import logo from '../assets/Group 25.png';

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
};

const navItems = [
  { icon: <Icon icon={appsIcon} className="w-5 h-5" />, label: 'Dashboard' },
  { icon: <Layout size={20} />, label: 'Projects' },
  { icon: <FileText size={20} />, label: 'Briefs' },
  { icon: <BarChart size={20} />, label: 'Analytics' },
  { icon: <Star size={20} />, label: 'Swiper' },
  { icon: <Layout size={20} />, label: 'Website Scraper' },
  { icon: <File size={20} />, label: 'Testimonials' },
  { icon: <File size={20} />, label: 'Daconsah' },
];

const Sidebar = ({ isOpen = false, onClose }: Props) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          bg-[#15234E] text-white w-64 p-6 flex flex-col
          fixed top-0 bottom-0 left-0 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:relative md:z-auto
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
            <h1 className="text-xl font-bold">Tandem</h1>
          </div>
          <button
            onClick={onClose}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto">
          <nav className="space-y-1">
            {navItems.map((item, index) => {
              const isActive = index === 0; // Only Dashboard active
              return (
                <div
                  key={index}
                  className={`
                    flex items-center gap-3 py-3 px-4 rounded-full cursor-pointer transition
                    ${isActive ? 'bg-[#4D43E4]  text-white border border-[#4D43E4]' : 'text-gray-300 hover:bg-[#1D2C5F] hover:text-white'}
                  `}
                >
                  <span className="flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Sign Out */}
        <div className="pt-4 border-t border-[#1D2C5F]">
          <div className="flex items-center gap-2 p-3 rounded-lg cursor-pointer hover:bg-[#1D2C5F] text-gray-300 hover:text-white transition">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Sign Out</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
