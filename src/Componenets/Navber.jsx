import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/Logo2.png";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../Firebase/AuthProvider";

const Navber = () => {
  const { user, logout } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleProfileMenu = () => {
    setOpenProfile(!openProfile);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "AllQueries", path: "/AllQueries" },
    { name: "AddMyQueries", path: "/addQuerie" },
    { name: "My Queries", path: "/myQueries" },
    { name: "RecommendationsForMe", path: "/recommendationForMe" },
    { name: "MyRecommendations", path: "/myRecommendations" },
    {name:"Contact Us", path:'/contact'},
    {name:"SocialMediaLinks", path:'/SocialMediaLinks'}
  ];

  const getLinkClasses = ({ isActive }) =>
    isActive
      ? "text-teal-600 dark:text-teal-400 underline font-medium"
      : "text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75";

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex justify-center items-center">
            <img className="h-10" src={Logo} alt="Logo" />
            <h1 className="text-4xl text-teal-500 font-semibold pb-2">
              Questly
            </h1>
          </div>
        </Link>

        {/* Navigation links (Desktop) */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {navItems
              .filter((item) => {
                if (!user) {
                  return item.name === "Home" || item.name === "AllQueries" ||
                  item.name==="Contact Us"||item.name==="SocialMediaLinks"                }
                return true;
              })
              .map((item) => (
                <li key={item.name}>
                  <NavLink to={item.path} className={getLinkClasses}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>

        {/* Right-side actions */}
        <div
          onClick={toggleProfileMenu}
          className="flex items-center gap-4 relative"
        >
          {user ? (
            <div className="relative">
              <img
                src={user.photoURL}
                className="w-10 h-10 rounded-full mx-auto"
              />

              {openProfile && (
                <div className="absolute right-0 mt-2 w-fit bg-white dark:bg-gray-800 rounded shadow-md z-50 py-2">
                  <div className="px-4 py-2 text-sm text-gray-700 dark:text-white">
                    Name: {user.displayName || "Anonymous User"}
                  </div>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setOpenProfile(false)}
                  >
                    <img
                      src={user.photoURL}
                      className="w-14 h-14 rounded-full mx-auto"
                    />
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex-wrap"
                    onClick={() => setOpenProfile(false)}
                  >
                    Email:{user.email}
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setOpenProfile(false);
                    }}
                    className="inline-block rounded bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-700 mx-20"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="sm:flex sm:gap-4">
              <Link
                to="/login"
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-700 dark:hover:bg-teal-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hidden sm:block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 hover:text-teal-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                Register
              </Link>
            </div>
          )}

          {/* Hamburger button (Mobile) */}
          <button
            onClick={toggleMobileMenu}
            className="block md:hidden rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <nav className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 text-sm">
            {navItems
              .filter((item) => {
                if (!user) {
                  return item.name === "Home" || item.name === "AllQueries";
                }
                return true;
              })
              .map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setOpenMenu(false)}
                    className={getLinkClasses}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            {!user && (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block w-full rounded-md bg-teal-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-teal-700 dark:hover:bg-teal-500"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="block w-full rounded-md bg-gray-100 px-4 py-2 text-center text-sm font-medium text-teal-600 hover:text-teal-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navber;
