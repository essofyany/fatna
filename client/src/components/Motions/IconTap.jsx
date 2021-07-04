import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { forwardRef } from "react";
const MotionBox = motion(Box);

const IconTap = forwardRef((props, ref) => {
  const { responsive, children, ...styles } = props;
  return (
    <MotionBox
      ref={ref}
      d={responsive}
      cursor="pointer"
      whileTap={{ scale: 0.8 }}
      {...styles}
    >
      {children}
    </MotionBox>
  );
});

export default IconTap;
