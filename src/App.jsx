
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Gamepad2, ArrowUp } from 'lucide-react';


import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Stats from "./Components/Stats.jsx";
import SkillCard from "./Components/SkillCard.jsx";
import ProjectCard from "./Components/ProjectCard.jsx";
import { skillsData, webProjectsData, unrealProjectsData } from "./Components/Data.jsx";



// Main App Component
export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
      <div className="min-h-screen bg-gray-900 text-white">
        <NavBar />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[url('https://www.leadsnextech.com/_next/static/media/bg.153fe1e6.jpg')] bg-cover bg-center opacity-20"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                  Dev
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Full Stack
                </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Développeur passionné spécialisé en développement web , App moderne et game development avec Unreal Engine
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                      href="https://www.fab.com/sellers/Mecanes"
                      target="_blank"
                      className="group flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <img src="https://www.pikpng.com/pngl/b/543-5434947_unreal-engine-logo-unreal-engine-logo-ico-clipart.png" alt="Unreal" className="w-6 h-6 mr-3" />
                    <span className="font-semibold">Voir mes Plugins</span>
                    <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                      href="https://github.com/Neylorxt"
                      target="_blank"
                      className="group flex items-center px-8 py-4 bg-gray-800/50 backdrop-blur-lg border border-gray-600 rounded-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github size={20} className="mr-3" />
                    <span className="font-semibold">GitHub</span>
                    <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <Stats />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Mes <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Compétences</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Technologies et outils que je maîtrise pour créer des solutions innovantes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {skillsData.map((skillCategory, index) => (
                  <SkillCard key={index} {...skillCategory} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Mes <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Projets</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                Une sélection de mes réalisations récentes
              </p>
            </div>

            {/* Web Projects */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <Code className="text-blue-400 mr-3" size={32} />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Projets <span className="text-blue-400">Web</span>
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {webProjectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>

            {/* Unreal Engine Projects */}
            <div>
              <div className="flex items-center mb-8">
                <Gamepad2 className="text-purple-400 mr-3" size={32} />
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Projets <span className="text-purple-400">Unreal Engine</span>
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {unrealProjectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                    href="https://www.fab.com/sellers/Mecanes"
                    target="_blank"
                    className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  <img src="https://www.pikpng.com/pngl/b/543-5434947_unreal-engine-logo-unreal-engine-logo-ico-clipart.png" alt="Unreal" className="w-6 h-6 mr-3" />
                  <span className="font-semibold">Voir tous mes plugins sur Fab</span>
                  <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Restons en <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">Contact</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                Intéressé par une collaboration ? N'hésitez pas à me contacter !
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Neylorxt" target="_blank" className="group p-4 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-110">
                <Github size={32} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.twitch.tv/neylorxt" target="_blank" className="group p-4 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-110">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 group-hover:text-purple-400 transition-colors">
                  <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z M16 8l0 4 M12 8l0 4"/>
                </svg>
              </a>
              <a href="https://linktr.ee/neylorxt" target="_blank" className="group p-4 bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-110">
                <ExternalLink size={32} className="text-gray-400 group-hover:text-green-400 transition-colors" />
              </a>
            </div>
          </div>
        </section>

        <Footer />

        {/* Scroll to Top Button */}
        {showScrollTop && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
            >
              <ArrowUp size={20} />
            </button>
        )}
      </div>
  );
}