import { motion, useInView } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
const AnimationComponent = (props) => {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });

  return (
    <motion.div
      ref={elementRef}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      {props.children}
    </motion.div>
  );
};

export default AnimationComponent;
