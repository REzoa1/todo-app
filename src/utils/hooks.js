import { useEffect } from "react";

export const useAddTask = (callback) => {
  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === "Enter") {
        callback();
      }
    };
    window.addEventListener("keydown", handleEnter);
    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, [callback]);
};
