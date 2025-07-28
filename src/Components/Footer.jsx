

export default function Footer() {
    return (
        <footer className="py-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold">NXT</span>
                        </div>
                        <p className="text-gray-400">© {new Date().getFullYear()} NEYLORXT. Tous droits réservés.</p>
                    </div>
                    {/*<div className="text-gray-400 text-sm">*/}
                    {/*    Fait avec ❤️ et React*/}
                    {/*</div>*/}
                </div>
            </div>
        </footer>
    )
}