import { ExternalLink } from "lucide-react";

interface Link {
  title: string;
  description: string;
  url: string;
}

export default function LinksPage() {
  const links: Link[] = [
    {
      title: "MCT Project Documentation",
      description: "Main project documentation and planning document",
      url: "https://docs.google.com/document/d/1fipzoiSPPyjy2kZtxcjt7hRPfyP1lWJNU6W562F3GOA/edit?tab=t.0",
    },
    // Add more links as needed
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Resources & Links
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Documentation and external resources for the ML rollout project
        </p>
      </div>

      <div className="space-y-4 md:space-y-6">
        {links.length > 0 ? (
          links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                    {link.title}
                    <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    {link.description}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-3 break-all">
                    {link.url}
                  </p>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="p-8 bg-gray-50 rounded-lg text-center">
            <p className="text-gray-600">No links added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
