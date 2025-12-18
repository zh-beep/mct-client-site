'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface PhaseCardProps {
  phase: number;
  date: string;
  title: string;
  shortDescription: string;
  isCurrent: boolean;
  details: {
    summary: string;
    approach: string;
    todos: string[];
  };
}

export default function PhaseCard({
  phase,
  date,
  title,
  shortDescription,
  isCurrent,
  details,
}: PhaseCardProps) {
  const [isExpanded, setIsExpanded] = useState(isCurrent);

  return (
    <div className={`border rounded-lg overflow-hidden transition-all ${
      isCurrent ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
    }`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
          isCurrent ? 'hover:bg-blue-100' : ''
        }`}
      >
        <div className="flex-1 text-left">
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-lg font-bold ${
              isCurrent ? 'text-blue-600' : 'text-gray-600'
            }`}>
              Phase {phase}
            </span>
            {isCurrent && (
              <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                YOU ARE HERE
              </span>
            )}
          </div>
          <h3 className={`text-xl font-semibold mb-1 ${
            isCurrent ? 'text-gray-900' : 'text-gray-800'
          }`}>
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{date}</p>
          <p className="text-sm text-gray-700">{shortDescription}</p>
        </div>
        <ChevronDown
          size={24}
          className={`flex-shrink-0 ml-4 text-gray-600 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <div className={`border-t ${isCurrent ? 'border-blue-200' : 'border-gray-200'} px-6 py-4 bg-gray-50 ${isCurrent ? 'bg-blue-50' : ''}`}>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Overview</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {details.summary}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Approach</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {details.approach}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">To Do</h4>
              <ul className="space-y-2">
                {details.todos.map((todo, index) => (
                  <li key={index} className="flex gap-3 text-sm text-gray-700">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span>{todo}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
