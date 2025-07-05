import React from 'react';
import { FaRobot, FaBriefcase, FaHeart, FaBookOpen, FaUsers } from 'react-icons/fa';

const useCases = [
  {
    icon: <FaRobot className="text-2xl text-violet" />,
    title: "Everyday Questions",
    description: "Ask Sera anything, from tech help to random facts. She's your always-on brain.",
    tag: "Personal",
  },
  {
    icon: <FaBriefcase className="text-2xl text-royal" />,
    title: "Work Assistance",
    description: "Draft emails, summarize documents, generate reports, and stay productive.",
    tag: "Professional",
  },
  {
    icon: <FaHeart className="text-2xl text-peach" />,
    title: "Emotional Support",
    description: "Feeling down? Chat with Sera for emotional comfort, venting, or advice.",
    tag: "Wellness",
  },
  {
    icon: <FaBookOpen className="text-2xl text-violet" />,
    title: "Homework & Learning",
    description: "Stuck on a problem? Sera can explain, guide, and help you learn better.",
    tag: "Education",
  },
  {
    icon: <FaUsers className="text-2xl text-royal" />,
    title: "Social Practice",
    description: "Practice conversations, prepare interviews, or improve your language skills.",
    tag: "Social",
  },
];

export default function Usecases() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Use Cases</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Why you should use Sera
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {useCases.map((use, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-white via-gray-50 to-[#fdf9ff] border border-gray-200 shadow-md rounded-xl p-6 text-left transition-all hover:shadow-xl"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gray-100 p-3 rounded-full">{use.icon}</div>
              <span className="text-sm font-medium text-gray-500 bg-peach bg-opacity-10 px-3 py-1 rounded-full">
                {use.tag}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{use.title}</h3>
            <p className="text-gray-600 mt-1">{use.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
