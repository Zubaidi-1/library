import { forwardRef } from "react";
import classes from "./Hero.module.css";
import AnimatedTyping from "./AnimatedTyping";
import { motion } from "framer-motion";

const Hero = forwardRef(function ({ scrollSearch }, ref) {
  return (
    <div ref={ref} className={classes.heroContainer}>
      <div className={classes.divContainer}>
        <AnimatedTyping
          arr={
            "Many people, myself among them, feel better at the mere sight of a book."
          }
          delay={0.5}
        />
      </div>
      <div className={classes.btnContainer}>
        <motion.button
          onClick={scrollSearch}
          whileHover={{
            scale: 1.2,
            borderRadius: "10%",
            transition: {
              type: "spring",
              damping: 6,
            },
          }}
          className={classes.exploreButton}
        >
          Explore Books
        </motion.button>
      </div>
    </div>
  );
});

export default Hero;
