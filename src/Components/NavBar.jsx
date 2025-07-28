import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            NEYLORXT
                        </h1>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#skills" className="hover:text-blue-400 transition-colors">Compétences</a>
                        <a href="#projects" className="hover:text-blue-400 transition-colors">Projets</a>
                        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold">NXT</span>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-gray-900/95 backdrop-blur-lg rounded-lg mt-2 p-4">
                        <div className="flex flex-col space-y-4">
                            <a href="#skills" className="hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Compétences</a>
                            <a href="#projects" className="hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Projets</a>
                            <a href="#contact" className="hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
                            <div className="flex space-x-4 pt-4 border-t border-gray-700">
                                <a href="https://github.com/Neylorxt" target="_blank" className="hover:text-blue-400 transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.twitch.tv/neylorxt" target="_blank" className="hover:text-purple-400 transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z M16 8l0 4 M12 8l0 4"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}