import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useCurrentPath = () => {
  const [currentPath, setCurrentPath] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    setCurrentPath(pathname.split("/").filter((path) => path));
  }, [pathname]);

  return currentPath;
};

export default useCurrentPath;
