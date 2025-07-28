import { Code, Gamepad2} from "lucide-react";

export const skillsData = [
    {
        title: "Développement Web",
        icon: <Code size={24} />,
        color: "bg-yellow-500/20 text-yellow-400",
        skills: [
            { name: "React", level: 80, color: "bg-blue-500" },
            { name: "JavaScript", level: 60, color: "bg-yellow-500" },
            { name: "Node.js", level: 80, color: "bg-green-500" },
            { name: "Java Spring", level: 65, color: "bg-red-500" }
        ]
    },
    {
        title: "Game Development",
        icon: <Gamepad2 size={24} />,
        color: "bg-purple-500/20 text-purple-400",
        skills: [
            { name: "Unreal Engine", level: 90, color: "bg-blue-500" },
            { name: "C++", level: 80, color: "bg-red-500" },
            { name: "Blueprint", level: 90, color: "bg-purple-500" },
            { name: "Widget UI", level: 70, color: "bg-green-500" }
        ]
    }
];


export const webProjectsData = [
    {
        name: "Moderne To-Do List",
        description: "Application de gestion de tâches moderne avec interface intuitive et fonctionnalités avancées",
        tech: ["React", "Tailwind CSS", "JavaScript", "Local Storage"],
        live: "https://moderne-to-do-list.vercel.app",
        github: "https://github.com/neylorxt/moderne-to-do-list",
        category: "Frontend"
    },
    {
        name: "MovieFinder",
        description: "Application de recherche de films avec API TMDB intégrée et interface moderne",
        tech: ["React", "TMDB API", "CSS3", "JavaScript"],
        live: "https://movie-finder-gilt.vercel.app",
        github: "https://github.com/neylorxt/movie-finder",
        category: "Frontend"
    },
    {
        name: "StarterKit React-Tailwind",
        description: "Template de démarrage optimisé pour projets React avec Tailwind CSS",
        tech: ["React", "Tailwind CSS", "Vite"],
        github: "https://github.com/neylorxt/StarterKit-React-Tailwind",
        category: "Template"
    },
    {
        name: "Mini Bank",
        description: "Application bancaire complète avec interface utilisateur moderne",
        tech: ["React", "REST API"],
        github: "https://github.com/neylorxt/mini-bank",
        category: "Fullstack"
    },
    {
        name: "Mini Bank API",
        description: "API REST robuste pour application bancaire avec authentification JWT",
        tech: ["Node js", "Express", "PostgreSQL", "JWT"],
        github: "https://github.com/neylorxt/mini-bank-api",
        category: "Backend"
    },
    {
        name: "React Native Learn",
        description: "Projet d'apprentissage React Native avec fonctionnalités mobiles natives",
        tech: ["React Native", "Expo", "JavaScript", "Mobile"],
        github: "https://github.com/neylorxt/react-native-learn",
        category: "Mobile"
    }
];



export const unrealProjectsData = [
    {
        name: "Pro Inventory System",
        description: "Système d'inventaire professionnel pour Unreal Engine avec UI complète et fonctionnalités avancées",
        tech: ["Unreal Engine 5", "C++", "Blueprint", "Inventaire", "UMG"],
        live: "https://www.fab.com/listings/c7098063-00a1-4a6b-ba2f-527803b025e2",
        category: "Plugin",
        featured: true
    },
    {
        name: "Inventory System Core",
        description: "Version allégée du système d'inventaire avec fonctionnalités essentielles",
        tech: ["Unreal Engine 5", "Blueprint", "UI", "Inventaire"],
        live: "https://www.fab.com/listings/760c8ab0-2d4c-4697-acd5-f8a637acf28f",
        category: "Asset Pack",
        featured: true
    },
    {
        name: "Easy Interaction System",
        description: "Système d'interaction simple et efficace dans Unreal Engine",
        tech: ["Unreal Engine 5", "Blueprint", "C++", "Interface"],
        live: "https://www.fab.com/listings/2492bdfc-b641-4ade-ac33-15994a60dde7",
        category: "Plugin"
    }
];