import PhaseCard from "@/components/PhaseCard";

export default function Home() {
  const phases = [
    {
      phase: 0,
      date: "Current Phase",
      title: "Simple Arms Testing",
      shortDescription: "Test system & validate assumptions with simple arms",
      isCurrent: true,
      details: {
        summary:
          "Testing simple, medium, and aggressive arms. We based this off the dataset Matthew provided, ~13,000 ad breaks to figure out that we should test simple, medium, and aggressive arms.",
        approach:
          "Simple arms by time frame to test arms. Build out arm orchestration engine & implement a stopgap function to monitor Views, Revenue Per Mille, & AVD so that it does not drop aggressively.",
        todos: [
          "Build out arm orchestration engine",
          "Implement stopgap function to monitor Views",
          "Monitor Revenue Per Mille (RPM)",
          "Monitor Average View Duration (AVD) to prevent aggressive drops",
        ],
      },
    },
    {
      phase: 1,
      date: "January 1st",
      title: "More Advanced Arms",
      shortDescription: "Advanced logging and ML-driven placement recommendations",
      isCurrent: false,
      details: {
        summary:
          "At this stage, we should be able to look at AVD and begin recommending specific placements based on AVD, watch history and other factors. Based off the current dataset, we will start adding more advanced logging.",
        approach:
          "We will be seeing what ad breaks are what. We can also being sampling across different arms and will continue feeding our analytics engine. We will be implementing new arms. For example, based off the dataset Matthew gave us, most videos did not have an ad in the first 60 seconds or the last 60 seconds. Then we have some groups: kids video buckets can have x number of ads for these seconds. Another arm can be youtube automatic placements + a few arms close to where AVD drops off.",
        todos: [
          "Add more strategies for ad placement",
          "Implement advanced logging for every ad break",
          "Monitor each deployed ad break",
          "Compare against AVD metrics",
          "Develop kids video bucket targeting",
          "Create YouTube automatic placement arms",
          "Implement placement optimization at AVD drop-off points",
        ],
      },
    },
    {
      phase: 2,
      date: "February 1st",
      title: "Larger Demographics & ML Pipeline",
      shortDescription: "Advanced ML methods across broader audience segments",
      isCurrent: false,
      details: {
        summary:
          "We can begin using more advanced Machine Learning methods like XGBoost to identify what demographics and what types of ad breaks (pauses, types of scene changes) work best and continue working the best across channels.",
        approach:
          "Deploy a continuous machine learning pipeline to continuously deploy and train on new data coming in. Scale the system to handle larger demographic segments and channel variations.",
        todos: [
          "Implement XGBoost model for demographic analysis",
          "Analyze pause patterns and scene change effectiveness",
          "Build continuous ML training pipeline",
          "Implement automated model retraining",
          "Scale testing across multiple channels",
          "Monitor cross-channel performance differences",
          "Develop demographic-specific arm strategies",
        ],
      },
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          ML Rollout Timeline
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Phases of deployment for machine learning optimization
        </p>
      </div>

      <div className="space-y-4 md:space-y-6">
        {phases.map((phaseData) => (
          <PhaseCard key={phaseData.phase} {...phaseData} />
        ))}
      </div>

      <div className="mt-8 md:mt-12 p-4 md:p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="font-semibold text-gray-900 mb-2">Goal Across All Phases</h2>
        <p className="text-sm md:text-base text-gray-700">
          To continuously optimize ad placement strategy, improve user experience through
          better AVD metrics, and maximize revenue while maintaining system stability.
        </p>
      </div>
    </div>
  );
}
