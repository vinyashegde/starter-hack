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
    <section className="container mx-auto py-20 px-4" id="templates">
      <h2 className="text-3xl font-bold text-center mb-10 text-white" 
      // data-aos="fade-up" data-aos-delay="100"
      >
        Available Templates
      </h2>

      {/* Search Filter with Animation */}
      <div className="flex justify-center mb-8" 
      // data-aos="fade-up" data-aos-delay="200"
      >
        <input
          type="text"
          placeholder="Search templates..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-3 w-2/3 bg-transparent border border-white rounded-lg text-white focus:outline-none focus:border-blue-500 placeholder-white"
        />
      </div>

      {/* Template Display without Animation */}
      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <div
              key={template.name}
              className="border border-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-white"
            >
              <h3 className="text-xl font-bold mb-2">{template.name}</h3>
              <p className="text-gray-400 mb-4">{template.description}</p>
              <div className="flex flex-wrap space-x-2 mb-4">
                {template.tags.map((tag) => (
                  <span key={tag} className="border border-white text-white px-2 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>
              <button className="mt-4 border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400">
                Get Started
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400" data-aos="fade-up" data-aos-delay="300">
          Choose a domain to search...
        </p>
      )}
    </section>
  );
};

export default TemplatesDisplay;
