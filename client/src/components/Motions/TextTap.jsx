import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
const MotionText = motion(Text);

const TextTap = ({ children, ...styles }) => {
  return (
    <MotionText cursor="pointer" whileTap={{ scale: 0.95 }} {...styles}>
      {children}
    </MotionText>
  );
};

export default TextTap;
