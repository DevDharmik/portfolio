// src/components/Certifications.tsx
import React from "react";
import { content } from "../data/content";

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={cert.badgeUrl}
                alt={cert.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-center dark:text-white">
                {cert.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {cert.issuer}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
