import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Funta - Kitchen`;
  }, [title]);
};

export default useTitle;
