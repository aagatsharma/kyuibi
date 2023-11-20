"use client";

import { useState, useEffect } from "react";
import { motion, MotionProps } from "framer-motion";

interface AnimatedNumberProps extends MotionProps {
  stopAt: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ stopAt }) => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => {
        const updatedNumber = prevNumber + 1;
        return updatedNumber <= stopAt ? updatedNumber : stopAt;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [stopAt]);

  return (
    <motion.span
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="font-bold text-4xl"
    >
      {number}
    </motion.span>
  );
};

export default AnimatedNumber;
