import { useState } from "react";

const useToggle = () => {
  const [status, setStatus] = useState(false);
  const toggleStatus = () => setStatus((prev) => !prev);

  return [status, toggleStatus];
};

export default useToggle;
