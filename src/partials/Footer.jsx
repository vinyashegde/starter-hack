// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          © 2024 Lacekeepers Labs.
        </p>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <a
            href="https://twitter.com"
            className="text-gray-500 text-sm hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            X (Twitter)
          </a>
          <a
            href="https://dribbble.com"
            className="text-gray-500 text-sm hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
          <a
            href="https://github.com"
            className="text-gray-500 text-sm hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          {/* <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
            <span role="img" aria-label="moon">🌙</span>
          </button> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
