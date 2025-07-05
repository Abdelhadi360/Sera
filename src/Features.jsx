import React from 'react';

const features = [
  {
    title: "Powered by DeepSeek AI",
    description:
      "Sera runs on DeepSeek, a state-of-the-art open-source AI model built for speed, intelligence, and real understanding.",
    accent: "from-peach to-violet",
  },
  {
    title: "Natural Conversations",
    description:
      "Talk with Sera like a friend. She responds naturally, clearly, and with a touch of humor and personality.",
    accent: "from-violet to-royal",
  },
  {
    title: "Real-Time Responses",
    description:
      "Instant replies with typewriter-style animation. No loading wheels, just smooth, flowing answers.",
    accent: "from-royal to-peach",
  },
  {
    title: "Custom AI Personality",
    description:
      "Sera isn't robotic. She's helpful, sometimes funny, and a bit serious, just like a real assistant should be.",
    accent: "from-peach to-royal",
  },
];

export default function Features() {
  return (
    <section id='features' className="bg-gradient-to-br from-[#fdf6f3] to-[#f4ebff] px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet to-royal mb-4">
          Features
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-14">
          What makes Sera Special
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
          {features.map((feat, i) => (
            <div
              key={i}
              className="relative p-6 rounded-xl border border-white/40 bg-white bg-opacity-60 shadow-lg backdrop-blur-md transition-all hover:scale-[1.02]"
            >

              
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feat.accent} rounded-t-xl`} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feat.title}</h3>
              <p className="text-gray-700">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}