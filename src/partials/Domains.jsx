// src/components/DomainSection.js
import React from "react";

const domains = [
  { name: "Web Development", icon: "🌐" },
  { name: "Software Applications", icon: "💻" },
  { name: "Mobile Applications", icon: "📱" },
  // Add more domains as needed
];

const Domains = ({ onDomainClick, selectedDomain }) => {
  return (
    <section className="container mx-auto py-20 px-4" id="domains">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Choose Your Domain
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {domains.map((domain, index) => (
          <div
            key={domain.name}
            className={`p-6 rounded-lg border border-white text-center cursor-pointer transition-transform duration-300 ${
              selectedDomain === domain.name
                ? "bg-white text-black scale-105"
                : "bg-transparent text-white hover:bg-gray-800"
            }`}
            onClick={() => onDomainClick(domain.name)}
          >
            <div className="text-5xl mb-4">{domain.icon}</div>
            <h3 className="text-xl font-bold">{domain.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Domains;
