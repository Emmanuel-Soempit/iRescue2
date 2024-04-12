import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return null;
};

export default SmoothScroll;
