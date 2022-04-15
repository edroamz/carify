import React from "react";
import { Button } from "../components";

const NotFound = () => {
  return (
    <div className="h-screen w-screen container mx-auto max-w-screen-xl mx-auto px-8">
      <div className="grid justify-center">
        <p className="mt-24 font-mono text-lg">404 - Page Not found</p>
        <span
          className="mt-6 text-5xl"
          role="img"
          aria-label="construction sign emoji"
        >
          🚧
        </span>{" "}
        <h1 className="mt-6 mb-12 font-bold text-4xl">
          Oops. Nothing to see here...
        </h1>
        <Button
          tag="link"
          to="/"
          text="← Go Home"
          color="primary"
          size="lg"
        ></Button>
      </div>
    </div>
  );
};

export default NotFound;
