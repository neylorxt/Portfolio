import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";


function App() {

  return (
      <>
        <main className="">
          <NavBar/>

          <section className="relative  text-white overflow-hidden  ">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div
                className="absolute inset-0 bg-cover bg-center
                bg-[url('https://www.leadsnextech.com/_next/static/media/bg.153fe1e6.jpg')] brightness-0.4;"
            ></div>

            <div className="container mx-auto lg:px-12 px-5 py-24 md:py-32 relative z-10 lg:h-[90vh]">
              <div className="flex flex-col md:flex-row items-center justify-around">
                <div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
                  <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight ">
                    Dev
                    <br/>
                    <span
                        className="bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                Full Stack
              </span>
                  </h1>

                  <p className="text-xl mb-5 text-gray-300 ">
                    Salut c est neylorxt voici un appercu de ce que je fais et ce que je suis capable de faire.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

                    <a href="https://www.fab.com/sellers/Mecanes" target="_blank"
                       className="w-full flex align-center justify-center sm:w-auto pr-7 md:pr-0 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-lg text-white/70 hover:bg-white/10 hover:text-white transition-all min-w-[160px]">
                      <img src="https://www.pikpng.com/pngl/b/543-5434947_unreal-engine-logo-unreal-engine-logo-ico-clipart.png" alt="Unreal engine"
                      className="mr-2 w-[30px] h-[30px]"/>

                      <span className="text-xl">
                        Fab
                      </span>

                    </a>

                    <a href="https://github.com/Neylorxt" target="_blank"
                        className="w-full flex align-center justify-center sm:w-auto px-6 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-lg text-white/70 hover:bg-white/10 hover:text-white transition-all min-w-[160px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                           className="mr-2" viewBox="0 0 1792 1792">
                        <path
                            d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                      </svg>

                      <span className="text-xl">
                        Github
                      </span>

                    </a>
                  </div>

                </div>

                <div className="w-full md:w-2/5 md:pl-12 ">
                  <div
                      className="bg-opacity-10 backdrop-filter md:backdrop-blur-lg relative  rounded-xl p-8 shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-6">🛠️ Compétences</h2>

                    <div className="avatar avatar-placeholder h-16 right-2 top-2 drop_shadow lg:block md:block hidden  absolute">
                      <div className="bg-info text-base-100 w-8 rounded-full">
                        <span className="text-xs">CO</span>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <svg
                            className="w-6 h-6 mr-3 text-yellow-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                          ></path>
                        </svg>
                        <span>Dev Web</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                            className="w-6 h-6 mr-3 text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          ></path>
                        </svg>
                        <span>Game Dev</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                            className="w-6 h-6 mr-3 text-purple-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          ></path>
                        </svg>
                        <span>Projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/*----------------------- LISTE DES LANGUAGES ET SOFTWARE -----------------------*/}

          <section className="flex flex-wrap justify-center gap-3 py-10">

            {/*----------------------- WEB -----------------------*/}

            <div className="card w-96 bg-base-200 shadow-sm border-2 border-gray-600 min-w-[350px] max-w-[350px]">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">Language</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Web</h2>
                  <div className="text-md w-25" >
                    <div className="avatar-group -space-x-6">

                      <div className="avatar">
                        <div className="w-12">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"
                               className="w-12 h-12 mb-2"/>
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="HTML"
                               className="w-12 h-12 mb-2"/>
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="HTML"
                               className="w-12 h-12 mb-2"/>
                        </div>
                      </div>
                      <div className="avatar avatar-placeholder">
                        <div className="bg-neutral text-neutral-content w-12">
                          <span>+4</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>HTML CSS</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Tailwind css</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>React js</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Daisy UI</span>
                  </li>

                  <div className="divider">Backend</div>

                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Java [ Spring Boot ]</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success"
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>Node js </span>
                  </li>
                </ul>
              </div>
            </div>



            {/*----------------------- SOFTWARE & LANGUAGE -----------------------*/}

            <div className="card w-96 bg-base-200 shadow-sm border-2 border-gray-600 min-w-[350px] max-w-[350px]">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">Software & Language</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Game Dev</h2>
                  <div className="text-md w-25" >
                    <div className="avatar-group -space-x-6">

                      <div className="avatar">
                        <div className="w-12">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg" alt="HTML"
                               className="w-12 h-12 mb-2"/>
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="HTML"
                               className="w-12 h-12 mb-2"/>
                        </div>
                      </div>
                      <div className="avatar avatar-placeholder">
                        <div className="bg-neutral text-neutral-content w-12">
                          <span>+5</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Unreal Engine</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>C++</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Blueprint</span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Widget</span>
                  </li>

                  <div className="divider">
                    <a href="https://www.fab.com/sellers/Mecanes" target="_blank" rel="noreferrer"
                       className="hover:text-red-400">Plugins</a>
                  </div>

                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>
                      <a href="https://www.fab.com/listings/c7098063-00a1-4a6b-ba2f-527803b025e2" target="_blank" rel="noreferrer"
                         className="hover:text-red-400">Pro Inventory System</a>
                    </span>
                  </li>

                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>
                      <a href="https://www.fab.com/listings/760c8ab0-2d4c-4697-acd5-f8a637acf28f" target="_blank" rel="noreferrer"
                         className="hover:text-red-400">Inventory System Core</a>
                    </span>
                  </li>

                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>
                      <a href="https://www.fab.com/listings/2492bdfc-b641-4ade-ac33-15994a60dde7" target="_blank" rel="noreferrer"
                         className="hover:text-red-400">Easy Interaction System</a>
                    </span>
                  </li>

                </ul>
              </div>
            </div>


            {/*----------------------- PROJECTS -----------------------*/}

            <div className="card w-96 bg-base-200 shadow-sm border-2 border-gray-600 min-w-[350px] max-w-[350px]">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">Go to</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">Projects</h2>
                  <div className="text-md w-25" >
                    <div className="avatar-group -space-x-6">

                      <div className="avatar">
                        <div className="w-12">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="HTML"
                               className="w-12 h-12 mb-2"/>
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="HTML"
                               className="w-12 h-12 mb-2"/>
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="HTML"
                               className="w-12 h-12 mb-2"/>
                        </div>
                      </div>
                      <div className="avatar avatar-placeholder">
                        <div className="bg-neutral text-neutral-content w-12">
                          <span>+99</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>
                      <a href="https://github.com/neylorxt/Moderne-To-Do-List" target="_blank" rel="noreferrer"
                         className="hover:text-red-400">Moderne-To-Do-List</a>
                    </span>
                  </li>

                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>
                      <a href="https://github.com/neylorxt/MovieFinder" target="_blank" rel="noreferrer"
                         className="hover:text-red-400">MovieFinder</a>
                    </span>
                  </li>

                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>
                      <a href="https://github.com/neylorxt/Snypes-website" target="_blank" rel="noreferrer"
                         className="hover:text-red-400">Snypes-website</a>
                    </span>
                  </li>

                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>
                      <a href="https://github.com/neylorxt/StarterKit-React-Tailwind" target="_blank" rel="noreferrer"
                         className="hover:text-red-400">StarterKit-React-Tailwind</a>
                    </span>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>
                      <a href="https://github.com/neylorxt?tab=repositories" target="_blank" rel="noreferrer"
                         className="hover:text-red-400">etc ...</a>
                    </span>
                  </li>

                </ul>
              </div>
            </div>


          </section>


          {/*--------------------------- MY SKILL ----------------------------*/}
          <section>
            <article className="flex flex-col items-center justify-center gap-3 py-10 mb-10">
              <h1 className="text-4xl font-bold">MY SKILL</h1>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">HTML5</span>
                </div>
                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">CSS3</span>
                </div>
                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                       alt="TailwindCSS" className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">TailwindCSS</span>
                </div>
                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                       alt="JavaScript" className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">JavaScript</span>
                </div>
                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">React x2</span>
                </div>
                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">Node.js</span>
                </div>
                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">Java</span>
                </div>
                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">Spring Boot</span>
                </div>

                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" alt="Prisma"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">Prisma</span>
                </div>


                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="Postgres"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">Postgres</span>
                </div>

                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySql"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">MySql</span>
                </div>

              </div>
            </article>

            <article className="flex flex-col items-center justify-center gap-3 py-10 mb-10">
              <h1 className="text-4xl font-bold">Software & Tools</h1>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">


                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg" alt="Jetbrains"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">Jetbrains</span>
                </div>

                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rider/rider-original.svg" alt="Jetbrains Rider"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">Rider</span>
                </div>

                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg" alt="Jetbrains PhpStorm"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">PhpStorm</span>
                </div>


                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" alt="Jetbrains Intellij"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">Intellij</span>
                </div>

                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VsCode"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">Vs Code</span>
                </div>

                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">Postman</span>
                </div>

                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">Github</span>
                </div>

                <div
                    className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg" alt="Unreal Engine"
                       className="w-12 h-12 mb-2"/>
                  <span className="text-gray-300">Unreal Engine</span>
                </div>


              </div>
            </article>

          </section>




          <Footer/>


        </main>
      </>
  )
}

export default App
