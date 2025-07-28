import AnimatedCounter from "./AnimatedCounter.jsx";


// Stats Component
export default function Stats() {
    const stats = [
        { label: "Projets Web", value: 15, suffix: "+" },
        { label: "Plugins Unreal", value: 5, suffix: "+" },
        { label: "Technologies Maîtrisées", value: 12, suffix: "+" },
        { label: "Années d'Expérience", value: 2, suffix: "+" }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700">
                    <div className="text-3xl font-bold text-white mb-2">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
            ))}
        </div>
    );
}