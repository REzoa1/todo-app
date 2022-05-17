import "./Preloader.css";
import React from "react";

export const Preloader = ({ isLoading, children }) => {
  if (isLoading)
    return (
      <div className=" loading">
        <div className="content">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  return children;
};
