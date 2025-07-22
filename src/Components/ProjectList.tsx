import React from 'react';

const projects = [
  {
    name: 'OrbitRed Website',
    progress: 85,
    stage: 'Testimonials',
    feedbackCount: 3,
    status: 'In Progress',
    tagColor: 'bg-blue-100 text-blue-700',
    buttonLabel: 'Scraper',
  },
  {
    name: 'AI-Powered Brief',
    progress: 40,
    stage: 'Swiper',
    feedbackCount: 2,
    status: 'Pending',
    tagColor: 'bg-yellow-100 text-yellow-700',
    buttonLabel: 'Swiper',
  },
  {
    name: 'Evolve UI Redesign',
    progress: 92,
    stage: 'Review',
    feedbackCount: 1,
    status: 'Review',
    tagColor: 'bg-green-100 text-green-700',
    buttonLabel: 'Review',
  },
];

const steps = ['Intake', 'Swiper', 'Scraper', 'Testimonials', 'Review'];

const ProjectList = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-6 space-y-6 w-full">
      <h3 className="text-lg font-semibold text-gray-800">Active Projects</h3>

      {projects.map((project, index) => {
        const currentStep = steps.indexOf(project.stage);
        const progressWidth = ((currentStep + 1) / steps.length) * 100;

        return (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-2xl border border-gray-200 space-y-3"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div className="flex items-center gap-3 text-lg font-semibold text-gray-900">
                <span className="text-2xl font-bold">{project.progress}%</span>
                <div className="flex flex-col">
                  <span>{project.name}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium mt-1 w-fit ${project.tagColor}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className="text-sm text-gray-600">
                  {project.feedbackCount} Feedback
                </span>
                <button className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-indigo-700 transition">
                  {project.buttonLabel}
                </button>
              </div>
            </div>

            {/* Unified Progress Bar */}
            <div className="relative w-full h-4 flex items-center">
              {/* Base Track */}
              <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gray-200 rounded-full -translate-y-1/2"></div>

              {/* Filled Track */}
              <div
                className="absolute top-1/2 left-0 h-1.5 bg-indigo-600 rounded-full -translate-y-1/2 transition-all duration-500"
                style={{ width: `${progressWidth}%` }}
              ></div>

              {/* Dots */}
              <div className="absolute top-1/2 left-0 w-full flex justify-between -translate-y-1/2 z-10">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full border-2 ${
                      i === currentStep
                        ? 'bg-indigo-600 border-indigo-600'
                        : i < currentStep
                        ? 'bg-indigo-400 border-indigo-400'
                        : 'bg-gray-300 border-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Step Labels */}
            <div className="flex justify-between text-xs text-gray-500 pt-1">
              {steps.map((step, i) => (
                <span key={i} className="w-full text-center">
                  {step}
                </span>
              ))}
            </div>
          </div>
        );
      })}

      {/* View All Projects */}
      <div className="text-center pt-2">
        <button className="text-sm text-gray-600 hover:underline">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
