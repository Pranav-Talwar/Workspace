import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/?q=${encodeURIComponent(searchInput)}`);
    }
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between max-w-full md:max-w-6xl px-4 md:px-6 py-6 mx-auto bg-gray-900">
      {/* Logo */}
      <a href="/" className="text-white z-10 flex items-center space-x-2">
        <FontAwesomeIcon
          icon={faBookOpen}
          className="text-2xl relative top-[1px] text-purple-400"
        />
        <h1
          className="text-2xl font-extrabold tracking-wide leading-none"
          style={{ fontFamily: "'Roxborough CF', serif" }}
        >
          Cover To Cover
        </h1>
      </a>

      {/* Navigation Links, Search Bar & Account Icon */}
      <div className="flex items-center space-x-6 mt-4 md:mt-0">
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <a href="/blog" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Browse
              </a>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="relative">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-white"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-2 text-gray-500 hover:text-gray-300"
            >
              🔍
            </button>
          </form>
        </div>

        {/* Account Icon */}
        <FontAwesomeIcon
          icon={faCircleUser}
          flip="horizontal"
          size="2xl"
          className="text-purple-400 text-2xl"
        />
      </div>
    </header>
  );
}
