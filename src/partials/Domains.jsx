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
    <section className="container mx-auto py-20" id="domains">
      <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up" data-aos-delay="100">
        Choose Your Domain
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {domains.map((domain, index) => (
          <div
            key={domain.name}
            className={`p-6 rounded-lg shadow text-center cursor-pointer transition duration-300 ${
              selectedDomain === domain.name
                ? "bg-[#5d5dff] text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
            onClick={() => onDomainClick(domain.name)}
            data-aos="fade-up"
            data-aos-delay={200 + index * 100} // Adding staggered delays for each domain item
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
