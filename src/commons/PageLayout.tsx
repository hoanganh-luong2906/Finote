"use client";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ScrollProgress from "./ScrollProgress";
import { finoteUtility } from "@/utilities";
import EmbedPopup from "./components/EmbedPopup";

const PageLayout = ({ children, bg, margin, noFooter, dark, footer }:any) => {
  useEffect(() => {
    finoteUtility.scrollAnimations();
    finoteUtility.smoothScroll();
    finoteUtility.counters();
    finoteUtility.stickMenu();
    finoteUtility.backToTop();
  }, []);

  return (
    <Fragment>
      <EmbedPopup />
      <div id="smooth-wrapper" className="mil-wrapper">
        {/* scroll progress */}
        <ScrollProgress />
        {/* scroll progress end */}
        {/* back to top */}
        <a href="#" className="progress-wrap active-progress" />
        {/* top panel end */}
        <Header dark={dark} />
        {/* top panel end */}
        {/* content */}
        <div id="smooth-content">
          {children}
          {/* footer */}
          {!noFooter && <Footer bg={bg} margin={margin} />}
          {/* footer end */}
        </div>
        {/* content end */}
      </div>
    </Fragment>
  );
};
export default PageLayout;
