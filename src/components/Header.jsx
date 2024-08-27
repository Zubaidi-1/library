import classes from "./Header.module.css";
import { easeIn, motion } from "framer-motion";
export default function Header({ scrollHero, scrollSearch }) {
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeIn },
    },
  };
  return (
    <motion.div
      className={classes.contain}
      initial="hidden"
      animate="visible"
      variants={boxVariants}
    >
      <ul>
        <li>
          <a onClick={scrollHero}>About</a>
        </li>

        <li>
          <a onClick={scrollSearch}>Search</a>
        </li>
      </ul>
    </motion.div>
  );
}
