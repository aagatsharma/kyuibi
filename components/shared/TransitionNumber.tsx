"use client";

import AnimatedNumbers from "react-animated-numbers";

interface Props {
  total: number;
}

const TransitionNumber = ({ total }: Props) => {
  return (
    <AnimatedNumbers
      className="font-bold "
      transitions={(index) => ({
        type: "just",
        duration: index + 0.3,
      })}
      fontStyle={{
        fontSize: 36,
      }}
      animateToNumber={total}
    />
  );
};

export default TransitionNumber;
