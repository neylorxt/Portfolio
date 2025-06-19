
export default function NavBar(){
    return (
        <div className="navbar bg-base-300 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a href="https://linktr.ee/neylorxt" target="_blank" >Liktree</a></li>
                        <li><a href="https://www.youtube.com/@NEYLORXT" target="_blank" >Youtube</a></li>
                        <li><a href="https://github.com/Neylorxt" target="_blank">Github</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <h1 className="text-3xl font-bold ">NEYLORXT</h1>
            </div>
            <div className="navbar-end">
                <div className="avatar avatar-online avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                        <span className="text-md font-bold">NXT</span>
                    </div>
                </div>
            </div>
        </div>
    )
}