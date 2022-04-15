import React from "react";

const navItems = [
  { id: 0, name: "Inventory", url: "#", hasItems: true, isActive: false },
  { id: 1, name: "Services", url: "#", hasItems: true, isActive: false },
  { id: 2, name: "Offers", url: "#", hasItems: false, isActive: false },
  { id: 3, name: "About", url: "#", hasItems: false, isActive: false },
];

const navMenu = () => {
  return (
    <nav className="hidden md:flex md:space-x-6">
      {navItems.map(({ id, name, url, hasItems, isActive }, index) => {
        if (hasItems) {
          return (
            <div key={id} className="relative">
              <button
                type="button"
                className={`appearance-none bg-transparent ${
                  isActive ? "text-gray-900" : "text-gray-600"
                } group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
              >
                <span>{name}</span>
                <svg
                  className="h-5 w-5 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          );
        } else {
          return (
            <a
              key={id}
              href={url}
              className="text-base leading-6 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            >
              {name}
            </a>
          );
        }
      })}
    </nav>
  );
};

export default navMenu;
