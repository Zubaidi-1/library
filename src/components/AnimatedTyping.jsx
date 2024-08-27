import { motion } from "framer-motion";

export default function AnimatedTyping({ arr, delay }) {
  return (
    <div>
      {arr.split("").map((char, index) => {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.1 * index }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
}
