import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Aboutcss from './about.module.css';
import developer from "./developer.gif";
import html from "./html.gif";
import code from "./code.gif";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutWrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setIsVisible(true); // Set isVisible to true when About section becomes fully visible
          } else {
            setIsVisible(false); // Set isVisible to false when About section is not fully visible
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutWrapperRef.current) {
      observer.observe(aboutWrapperRef.current);
    }

    return () => {
      if (aboutWrapperRef.current) {
        observer.unobserve(aboutWrapperRef.current);
      }
    };
  }, []);

  return (
    <section id={Aboutcss.about} ref={aboutWrapperRef}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            id={Aboutcss.aboutWrapper}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.5 }}
          >
            <div className={Aboutcss.cardDiv}>
              <div className={Aboutcss.card}>
                <div className={Aboutcss.cardicon}><img src={developer} alt="Developer" /></div>
                <p className={Aboutcss.cardtext}>Welcome to UISnippets - your ultimate destination for functional code snippets! Whether you're a seasoned developer or just dipping your toes into the world of coding, UISnippets is your go-to resource for efficient, ready-to-use code blocks.</p>
              </div>
              <div className={Aboutcss.card}>
                <div className={Aboutcss.cardicon}><img src={html} alt="htmlcode" /></div>
                <p className={Aboutcss.cardtext}>At UISnippets, we understand the value of time and the importance of clean, functional code. That's why we've curated a diverse collection of snippets designed to streamline your development process and enhance your projects. From HTML and CSS essentials and beyond, our library is packed with snippets tailored to meet your coding needs.</p>
              </div>
              <div className={Aboutcss.card}>
                <div className={Aboutcss.cardicon}><img src={code} alt="htmlcode" /></div>
                <p className={Aboutcss.cardtext}>Our mission is simple: to empower developers of all levels by providing them with a platform to discover, share, and collaborate on high-quality code snippets. Whether you're looking to optimize your workflow, solve a specific problem, or simply learn something new, UISnippets has you covered.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default About;
