import React from "react";
import HeaderLogo from "./resources/headerLogo.svg";

export const Header = ({ title }) => {
  return (
    <div className="flex flex-row items-center">
      <img className="pl-2 h-8" src={HeaderLogo} />
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
};

