import React from "react";
import { Link } from "react-router-dom";
import { Button, NavMenu } from "./";

const Header = () => {
  return (
    <div className="h-20 bg-white border-b border-gray-400">
      <div className="h-full flex justify-between items-center container mx-auto text-accents-4 max-w-screen-xl mx-auto px-8">
        <Link
          to="/"
          className="text-black inline-flex items-center text-2xl font-black tracking-tight"
        >
          Carify
        </Link>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            className="appearance-none bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600 transition duration-150 ease-in-out"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <NavMenu />
        <div className="hidden md:flex items-center justify-end space-x-8">
          <a
            href="#"
            className="whitespace-no-wrap text-base leading-6 font-medium text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Login
          </a>
          <span className="inline-flex rounded-md shadow-sm">
            <Button
              href="#"
              tag="link"
              text="Sign In"
              color="primary"
              size="xs"
            ></Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
