import React, { useState, useEffect } from 'react';

const Navbar = () => {
  /* Modo Dark */
  const [theme, setTheme] = useState("light");
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  /* Boton Hamburguesa */
  const [abierto, setAbierto] = useState(false);

  const status = () => {
    setAbierto(!abierto);
  };

/* Opciones del menú */
  let Links = [
    { name: "Opcion1", link: "/" },
    { name: "Opcion2", link: "/" },
    { name: "Opcion3", link: "/" },
    { name: "Opcion4", link: "/" },
    { name: "Opcion5", link: "/" }
  ]

  /* Funcion para verfiifcar el Efecto de Dark */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <nav className='flex flex-col items-start w-full bg-white fixed top-0 left-0 z-50 py-2 pb-3 px-6 sm:px-8 md:px-10 lg:flex-row lg:px-16 xl:px-24 2xl:px-64 lg:pt-4 lg:items-end dark:bg-gray-800 lg:dark:bg-gradient-to-r from-black to-gray-900'>
        {/* Nombre en el NavBar */}
        <div className='flex items-center justify-between w-full h-10 lg:w-auto'>
          <div className='font-bold text-2xl pr-9 dark:text-white'>
            <a href='/' className='flex gap-2'>
              <p className='first-letter:text-3xl first-letter:text-cyan-500'>Titulo</p>
              <p className='first-letter:text-3xl first-letter:text-cyan-500'>Nombre</p>
            </a>
          </div>

          {/* Boton Hamburguesa */}
          <div className='flex pt-2 lg:hidden'>
            <button onClick={status} className='text-black dark:text-white'>
              <svg className='h-7 w-7' fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                {abierto ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`${abierto ? 'block' : 'hidden'} pt-3 lg:flex lg:items-center lg:w-auto`}>
          <ul className='space-y-3 lg:flex lg:space-x-5 lg:space-y-0'>
            {
              Links.map((link, index) => (
                <li key={index}>
                  <a className='text-gray-700 hover:text-black hover:font-semibold duration-700 dark:text-gray-300 dark:hover:text-yellow-300' href={link.link}>{link.name}</a>
                </li>
              ))
            }
          </ul>

          {/* Iconos */}
          <div className='flex pt-4 gap-2 lg:ml-4 lg:pt-0 lg:pl-4'>
            {/* Icono Github */}
            <li className='list-none hover:scale-125 duration-200'>
              <a href='/' target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 stroke-white stroke-2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </li>
            {/* Icono Linkeind */}
            <li className='list-none hover:scale-125 duration-200'>
              <a href='/' target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 stroke-black stroke-2 feather feather-linkedin dark:stroke-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </li>

            {/* Icono Instagram */}
            <li className='list-none hover:scale-125 duration-200'>
              <a href='/' target="_blank" rel="noopener noreferrer">
                <svg className='w-5 fill-black dark:fill-white' viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </li>

            {/* Icono Youtube */}
            <li className='list-none hover:scale-125 duration-200'>
              <a href='/' target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 stroke-white stroke-2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </li>

            {/* Icono Facebook */}
            <li className='list-none hover:scale-125 duration-200'>
              <a href='/' target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 stroke-2 dark:stroke-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </li>

            {/* Icono CV */}
            <li className='list-none hover:scale-150 duration-200'>
              <a className='pt-5' href="/" target="_blank" rel="noopener noreferrer">
                <svg className='w-5 animate-bounce fill-black dark:fill-yellow-200' viewBox="0 0 24 24" fillRule="evenodd">
                  <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/>
                </svg>
              </a>
            </li>

            {/* Icono Dark */}
            <li className='list-none hover:scale-150 duration-200 hover:cursor-pointer' onClick={handleThemeSwitch}>
              <div className='lg:flex'>
              {/*Icono MOON */}
              <svg className='w-5 hover:scale-105 duration-200 dark:hidden' viewBox="0 0 24 24" fillRule="evenodd">
                <path d="M10.719 2.082c-2.572 2.028-4.719 5.212-4.719 9.918 0 4.569 1.938 7.798 4.548 9.895-4.829-.705-8.548-4.874-8.548-9.895 0-5.08 3.808-9.288 8.719-9.918zm1.281-2.082c-6.617 0-12 5.383-12 12s5.383 12 12 12c1.894 0 3.87-.333 5.37-1.179-3.453-.613-9.37-3.367-9.37-10.821 0-7.555 6.422-10.317 9.37-10.821-1.74-.682-3.476-1.179-5.37-1.179zm0 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001z" />
              </svg>

              {/* Icono SUN */}
              <svg className='hidden w-5 hover:scale-105 md:flex5 duration-200 dark:flex dark:fill-white' viewBox="0 0 24 24" fillRule="evenodd">
                <path d="M22.088 13.126l1.912-1.126-1.912-1.126c-1.021-.602-1.372-1.91-.788-2.942l1.093-1.932-2.22-.02c-1.185-.01-2.143-.968-2.153-2.153l-.02-2.219-1.932 1.093c-1.031.583-2.34.233-2.941-.788l-1.127-1.913-1.127 1.913c-.602 1.021-1.91 1.372-2.941.788l-1.932-1.093-.02 2.219c-.01 1.185-.968 2.143-2.153 2.153l-2.22.02 1.093 1.932c.584 1.032.233 2.34-.788 2.942l-1.912 1.126 1.912 1.126c1.021.602 1.372 1.91.788 2.942l-1.093 1.932 2.22.02c1.185.01 2.143.968 2.153 2.153l.02 2.219 1.932-1.093c1.031-.583 2.34-.233 2.941.788l1.127 1.913 1.127-1.913c.602-1.021 1.91-1.372 2.941-.788l1.932 1.093.02-2.219c.011-1.185.969-2.143 2.153-2.153l2.22-.02-1.093-1.932c-.584-1.031-.234-2.34.788-2.942zm-10.117 6.874c-4.411 0-8-3.589-8-8s3.588-8 8-8 8 3.589 8 8-3.589 8-8 8zm6.029-8c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6 6 2.687 6 6z" />
              </svg>
              </div>

            </li>
          </div>
        </div>
      </nav>
    </div>

  );
};
export default Navbar;