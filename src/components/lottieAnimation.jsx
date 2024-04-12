import React, { useEffect } from "react";
import lottie from "lottie-web";

const LottieAnimation = ({
  id,
  animationData,
  loop = true,
  autoplay = true,
  width = "100%",
  height = "100%",
}) => {
  useEffect(() => {
    const container = document.getElementById(id);

    if (container) {
      lottie.loadAnimation({
        container,
        renderer: "svg",
        loop,
        autoplay,
        animationData,
      });
    }

    // Cleanup animation on component unmount
    return () => {
      lottie.destroy();
    };
  }, [id, animationData, loop, autoplay]);

  return <div id={id} style={{ width, height }} />;
};

export default LottieAnimation;
