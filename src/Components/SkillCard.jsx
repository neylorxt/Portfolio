// Skill Card Component
export default function SkillCard({ title, skills, icon, color }) {
    return (
        <div className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <div className={`p-2 rounded-lg ${color}`}>
                        {icon}
                    </div>
                </div>

                <div className="space-y-3">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <span className="text-gray-300">{skill.name}</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <span className="text-xs text-gray-400">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}