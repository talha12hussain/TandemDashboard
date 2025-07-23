
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
    <div className="bg-white shadow rounded-2xl p-6 w-full">
      <h3 className="text-base font-semibold text-gray-800 mb-5">Active Projects</h3>

      <div className="space-y-5">
        {projects.map((project, index) => {
          const currentStep = steps.indexOf(project.stage);

          return (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-2xl border border-indigo-100"
            >
              {/* Main Row Layout */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                {/* Left: Progress Info */}
                <div className="flex items-center gap-3 w-1/4 min-w-[200px]">
                  <span className="text-xl font-bold text-gray-900">{project.progress}%</span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">{project.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium mt-1 w-fit ${project.tagColor}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Center: Segmented Progress */}
                <div className="flex-grow">
                 <div className="relative w-full h-12 flex items-center">
  {/* Base Line */}
  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full z-0 -translate-y-1/2" />

  {/* Progress Line */}
  <div
    className="absolute top-1/2 left-0 h-1 bg-[#4D43E4] rounded-full z-10 -translate-y-1/2"
    style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
  />

  {/* Dots & Labels */}
 <div className="flex justify-between items-center w-full relative">
  {steps.map((step, i) => {
    const isCompleted = i < currentStep;
    const isCurrent = i === currentStep;

    return (
      <div key={i} className="flex-1 relative flex flex-col items-center">
        {/* Step Label */}
        <span className="text-[10px] text-gray-500 absolute -top-5 whitespace-nowrap">
          {step}
        </span>

        {/* Line to Next Step */}
        {i !== steps.length - 1 && (
          <div
            className={`absolute top-1/2 left-1/2 w-full h-[3px] transform -translate-x-1/2 -translate-y-1/2 ${
              isCompleted || isCurrent ? 'bg-[#4D43E4]' : 'bg-gray-300'
            }`}
            style={{ zIndex: 0 }}
          />
        )}

        {/* Dot */}
        <div
          className={`w-4 h-4 rounded-full border-2 z-10 ${
            isCurrent
              ? 'bg-[#4D43E4] border-[#4D43E4]'
              : isCompleted
              ? 'bg-[#847DECB0] border-[#847DECB0]'
              : 'bg-gray-300 border-gray-300'
          }`}
        ></div>
      </div>
    );
  })}
</div>


</div>

                </div>

                {/* Right: Feedback & Button */}
                <div className="flex flex-col items-end text-sm w-1/5 min-w-[120px]">
                  <span className="text-gray-600">{project.feedbackCount} Feedback</span>
                  <button className="bg-[#4D43E4] text-white px-4 py-1 rounded-full text-xs font-medium hover:bg-indigo-700 transition mt-1">
                    {project.buttonLabel}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Projects Button */}
      <div className="text-center pt-4">
        <button className="text-sm text-gray-600 hover:underline font-medium flex items-center gap-1 mx-auto">
          View All Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
