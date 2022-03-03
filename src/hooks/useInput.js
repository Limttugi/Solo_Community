import { useState, useCallback } from "react";

export default (initialVallue = null) => {
  const [value, setValue] = useState(initialVallue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};
