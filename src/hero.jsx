import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Herocss from './hero.module.css';
import { useInView } from 'react-intersection-observer'; // Importing useInView hook

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 }); // Using useInView hook to determine if the component is in view

  useEffect(() => {
    if (inView) {
      setIsVisible(true); // Set isVisible state to true when component is in view
    }
  }, [inView]);

  return (
    <div ref={ref} id="hero"> {/* Assign ref to the element */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            id={Herocss.hero}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.5 }}
          >
            <div className={Herocss.leftdiv}>
              <h1 className={Herocss.headline}>Welcome to UISnippets- The Ultimate Code Snippet Library: Find & Copy Powerful Code</h1>
              <h2 className={Herocss.subheadline}>Stop reinventing the wheel. Explore our vast collection of well-tested code snippets for all your front-end development needs.</h2>
              <a href="#snippets">
                <button className={Herocss.btn} type="button">
                  <strong className={Herocss.strong}>Browse Snippets Now</strong>
                  <div className={Herocss.containerStars}>
                    <div className={Herocss.stars}></div>
                  </div>
                  <div className={Herocss.glow}>
                    <div className={Herocss.circle}></div>
                    <div className={Herocss.circle}></div>
                  </div>
                </button>
              </a>
            </div>
            <div className={Herocss.rightdiv}>
              <div className={Herocss.spinner}>
                <div className={Herocss.spinner1}></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Hero;