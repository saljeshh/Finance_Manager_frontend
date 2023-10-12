import React, { useEffect } from "react";
import NProgress from "nprogress";

const LoadingIndicator = () => {
  useEffect(() => {
    NProgress.start(); // Start the loading indicator when this component mounts

    return () => {
      NProgress.done(); // Complete the loading indicator when this component unmounts
    };
  }, []);

  return null; // The component doesn't render anything; it's just for managing NProgress
};

export default LoadingIndicator;
