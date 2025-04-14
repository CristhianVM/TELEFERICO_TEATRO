import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import logoDark from '../assets/images/logo-dark.png';
import logoLight from '../assets/images/logo-light.png';
import {menuItems}from"@/constants/routes"

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    // Efecto para manejar el scroll y activar el menú
    useEffect(() => {
        const handleScroll = () => setScroll(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);

        // Usando la API de navegación para manejar el menú activo
        const currentPath = window.location.pathname;
        setActiveMenu(currentPath);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Manejo del menú activo con estado
    const isActive = (path) => activeMenu === path;


    // Componente para renderizar submenús recursivamente
    const renderSubmenu = (items) => (
        <ul className="submenu">
            {items.map((item, index) => (
                <li key={index}>
                    {item.single || !item.submenu ? (
                        <Link
                            href={item.path}
                            className={`sub-menu-item ${isActive(item.path) ? 'active' : ''}`}
                        >
                            {item.title}
                            {item.badge && (
                                <span className="bg-gray-50 dark:bg-slate-800 text-[10px] shadow shadow-gray-300 dark:shadow-gray-700 font-bold px-2.5 py-0.5 rounded h-5 ms-1">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    ) : (
                        <>
                            <Link href="#" className="flex items-center justify-between">
                                {item.title}
                                <span className="menu-arrow"></span>
                            </Link>
                            {renderSubmenu(item.submenu)}
                        </>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <nav id="topnav" className={`${scroll ? "nav-sticky" : ""} defaultscroll is-sticky`}>
            <div className="container">
                <Link className="logo" href="/home">
                    <img
                        src={logoDark}
                        className="h-6 inline-block dark:hidden"
                        alt="Logo"
                        fetchpriority="high"
                    />
                    <img
                        src={logoLight}
                        className="h-6 hidden dark:inline-block"
                        alt="Logo"
                        fetchpriority="high"
                    />
                </Link>

                <div className="menu-extras">
                    <div className="menu-item">
                        <button
                            className={`${toggleMenu ? 'open' : ''} navbar-toggle`}
                            onClick={() => setToggleMenu(!toggleMenu)}
                            aria-label="Toggle menu"
                            aria-expanded={toggleMenu}
                        >
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                    </div>
                </div>

                <ul className="buy-button list-none mb-0">
                    <li className="inline mb-0">
                        <Link href="/login" aria-label="Login">
                            <span className="py-[6px] px-4 md:inline hidden items-center justify-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold">
                                Login
                            </span>
                            <span className="py-[6px] px-4 inline md:hidden items-center justify-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400 hover:bg-amber-500 border border-amber-400 hover:border-amber-500 text-white font-semibold">
                                Login
                            </span>
                        </Link>
                    </li>

                    <li className="md:inline hidden ps-1 mb-0">
                        <Link
                            href="/signup"
                            target="_blank"
                            aria-label="Sign up"
                            className="py-[6px] px-4 inline-block items-center justify-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400 hover:bg-amber-500 border border-amber-400 hover:border-amber-500 text-white font-semibold"
                        >
                            Signup
                        </Link>
                    </li>
                </ul>

                <div id="navigation" className={`${toggleMenu ? 'block' : 'hidden'}`}>
                    <ul className="navigation-menu">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${item.submenu ? 'has-submenu parent-menu-item' : ''} ${isActive(item.path) ? 'active' : ''}`}
                            >
                                {item.single || !item.submenu ? (
                                    <Link
                                        href={item.path}
                                        className="sub-menu-item"
                                    >
                                        {item.title}
                                    </Link>
                                ) : (
                                    <>
                                        <Link href="#">{item.title}</Link>
                                        <span className="menu-arrow"></span>
                                        {renderSubmenu(item.submenu)}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
