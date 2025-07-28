import { Github, Star, Eye } from 'lucide-react';


// Project Card Component with category badge
export default function ProjectCard({ project }) {
    const getCategoryColor = (category) => {
        const colors = {
            'Frontend': 'bg-blue-500/20 text-blue-300',
            'Backend': 'bg-green-500/20 text-green-300',
            'Fullstack': 'bg-purple-500/20 text-purple-300',
            'Mobile': 'bg-pink-500/20 text-pink-300',
            'Template': 'bg-yellow-500/20 text-yellow-300',
            'Plugin': 'bg-red-500/20 text-red-300',
            'Asset Pack': 'bg-orange-600/50 text-gray-200',
            'AI': 'bg-teal-500/20 text-teal-300',
            'Other': 'bg-gray-500/20 text-gray-300',
        };
        return colors[category] || 'bg-gray-500/20 text-gray-300';
    };

    return (
        <div className={`group relative backdrop-blur-lg rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-105 ${
            project.featured
                ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30 hover:border-yellow-400/50'
                : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
        }`}>
            {project.featured && (
                <div className="absolute top-3 right-3 z-20">
                    <Star size={20} className="text-yellow-400 fill-yellow-400" />
                </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                        {project.category && (
                            <span className={`px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(project.category)}`}>
                {project.category}
              </span>
                        )}
                    </div>
                    <div className="flex space-x-2">
                        {project.live && (
                            <a href={project.live} target="_blank" className="p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                                <Eye size={16} />
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" className="p-2 bg-gray-500/20 text-gray-400 rounded-lg hover:bg-gray-500/30 transition-colors">
                                <Github size={16} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs">
              {tech}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
