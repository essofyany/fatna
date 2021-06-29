import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
const MotionBox = motion(Box);

function IconTap({ responsive, children, ...styles }) {
  return (
    <MotionBox
    d={responsive}
      cursor="pointer"
      whileTap={{ scale: 0.8 }}
      {...styles}
    >
      {children}
    </MotionBox>
  );
}

export default IconTap;
