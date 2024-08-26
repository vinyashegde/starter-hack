// src/components/TemplatesDisplay.js
import React, { useState } from "react";

const TemplatesDisplay = ({ templates }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTemplates = templates.filter((template) => 
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="container mx-auto py-20" id="templates">
      <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up" data-aos-delay="100">
        Available Templates
      </h2>

      {/* Search Filter with Animation */}
      <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="200">
        <input
          type="text"
          placeholder="Please select a domain to see available templates."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-3 w-2/3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-black"
        />
      </div>
      
      {/* Template Display with Animation */}
      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <div
              key={template.name}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100} // Staggered animation for each card
            >
              <h3 className="text-xl font-bold mb-2 text-black">{template.name}</h3>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <div className="flex flex-wrap space-x-2 mb-4">
                {template.tags.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Get Started</button>
            </div>
          ))}
        </div>
      ) : (
        
        <p className="text-center text-gray-500" data-aos="fade-up" data-aos-delay="300">
          No templates found. Please try a different search.
        </p>
      )}
    </section>
  );
};

export default TemplatesDisplay;
