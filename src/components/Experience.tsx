// src/components/Experience.tsx
import React from "react";
import { content } from "../data/content";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Experience / Internships
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.internships.map((internship) => (
            <div
              key={internship.id}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={internship.image}
                alt={internship.company}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold dark:text-white">
                {internship.role}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                {internship.company} | {internship.duration}
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-2">
                {internship.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {internship.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
