import { useEffect } from "react";

export const useAddTask = (func) => {
  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === "Enter") {
        func();
      }
    };
    window.addEventListener("keydown", handleEnter);
    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, [func]);
};
