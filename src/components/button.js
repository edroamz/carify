import React from "react";
import { Link } from "react-router-dom";

const sizes = {
  xs: "px-3 py-1",
  default: "w-40 py-4",
  lg: "w-56 py-4",
};

const colors = {
  default: "bg-white text-accents-4",
  primary:
    "bg-primary text-on-primary hover:bg-primary-hover focus:outline-none focus:border-primary-focus focus:shadow-outline active:bg-primary-active",
};

const Btn = (props) => <button {...props} />;
const ReactLink = (props) => <Link {...props} />;

const components = {
  button: Btn,
  link: ReactLink,
};

const Button = ({
  text,
  tag,
  size = "default",
  color = "default",
  ...rest
}) => {
  const TagName = components[tag || "button"];
  return (
    <TagName
      className={`whitespace-no-wrap inline-flex items-center justify-center border border-transparent transition ease-in-out duration-150 leading-6 shadow-md rounded-md ${
        sizes[size || "default"]
      } ${colors[color || "default"]}`}
      {...rest}
    >
      {text}
    </TagName>
  );
};

export default Button;
