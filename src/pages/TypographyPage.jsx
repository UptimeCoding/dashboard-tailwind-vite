import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Footer from '../pages/Footer';

function TypographyPage() {
  const [darkMode, setDarkMode] = useState(false); // Define darkMode state
  const [sidebarOpen, setSidebarOpen] = useState(false); // Define sidebarOpen state

  // Define toggleDarkMode function
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <div className={`flex flex-col md:flex-row h-screen overflow-hidden ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className={`relative flex-1 overflow-y-auto overflow-x-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Material Dashboard Heading</h1>
          <p className="font-roboto">Created using Roboto Font Family</p>

          <div className="my-8">
            <h1 className="text-5xl font-bold mb-4">Typography</h1>
            <h1 className="text-4xl font-bold mb-4">Header 1</h1>
            <h2 className="text-3xl font-bold mb-4">Header 2</h2>
            <h3 className="text-2xl font-bold mb-4">Header 3</h3>
            <h4 className="text-xl font-bold mb-4">Header 4</h4>
            <h5 className="text-lg font-bold mb-4">Header 5</h5>
            <h6 className="text-base font-bold mb-4">Header 6</h6>
          </div>

          <div className="my-8">
            <p className="font-normal leading-relaxed mb-4">
              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers.
              I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities,
              to show people, this is the level that things could be at.
            </p>
            <blockquote className="border-l-4 border-primary-light p-4 bg-primary-lightest text-primary-dark italic">
              <p className="mb-0">
                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers.
                I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities,
                to show people, this is the level that things could be at.
              </p>
              <footer className="text-xs">Kanye West, Musician</footer>
            </blockquote>
          </div>

          <div className="my-8">
            <p className="text-muted mb-4">
              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
            </p>
            <p className="text-primary mb-4">
              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
            </p>
            <p className="text-info mb-4">
              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
            </p>
            <p className="text-success mb-4">
              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
            </p>
            <p className="text-warning mb-4">
              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
            </p>
            <p className="text-danger mb-4">
              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
            </p>
          </div>

          <div className="my-8">
            <h1 className="text-lg font-bold mb-2">Small Tag Header with small subtitle</h1>
            <p className="text-sm">Use "small" tag for the headers</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default TypographyPage;
