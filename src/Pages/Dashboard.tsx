// src/Pages/Dashboard.tsx
import { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import MetricCards from '../Components/MetricCards';
import ProjectList from '../Components/ProjectList';
import SatisfactionSection from '../Components/SatisfactionSection';
import ProjectOverview from '../Components/ProjectOverview';
import TasteTrends from '../Components/TasteTrends';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header without dark mode toggle */}
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 md:p-6 space-y-6">
          <MetricCards />
          <ProjectList />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <SatisfactionSection />
              <ProjectOverview />
            </div>
            <TasteTrends />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
