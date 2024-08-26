import React, { useState } from "react";

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';
import Domains from '../partials/Domains';
import TemplatesDisplay from '../partials/TempletesDisplay';

function Home() {
  const [selectedDomain, setSelectedDomain] = useState(null);

  // Template data categorized by domain
  const templatesData = {
    "Web Development": [
      { name: "React + Tailwind", description: "A React project setup with Tailwind CSS.", tags: ["Responsive", "SEO-Optimized"] },
      { name: "React + Bootstrap", description: "A React project with Bootstrap styling.", tags: ["Mobile-First", "Customizable"] },
    ],
    "Software Applications": [
      { name: "Electron + React", description: "Build desktop apps using Electron and React.", tags: ["Cross-Platform", "JavaScript"] },
    ],
    "Mobile Applications": [
      { name: "React Native + Expo", description: "A React Native project setup with Expo.", tags: ["Cross-Platform", "Mobile"] },
    ],
    // Add more domains and templates as needed
  };

  const handleDomainClick = (domain) => {
    setSelectedDomain(domain);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <Domains onDomainClick={handleDomainClick} selectedDomain={selectedDomain} />
        <TemplatesDisplay templates={selectedDomain ? templatesData[selectedDomain] : []} />
        {/* <FeaturesBlocks />
        <FeaturesZigZag />
        <Testimonials />
        <Newsletter /> */}
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;