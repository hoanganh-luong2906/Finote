"use client";
import { finoteUtility } from "@/utilities";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    finoteUtility.preloader();
  }, []);

  return (
    <div className="mil-preloader">
      <div className="mil-load" />
      <p className="h2 mil-mb-30">
        <span className="mil-light mil-counter" data-number={100}>
          100
        </span>
        <span className="mil-light">%</span>
      </p>
    </div>
  );
};
export default Preloader;
