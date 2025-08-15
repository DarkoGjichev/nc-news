import { useEffect, useState } from "react";

function useApiRequest(apiFunction, ...arg) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiFunction(...arg)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [...arg, apiFunction]);

  return { isLoading, error, data, setData };
}

export default useApiRequest;
