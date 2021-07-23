import { useState } from "react";
import { Box } from "@chakra-ui/react";
import TextTap from "../Motions/TextTap";
import { motion } from "framer-motion";

const MotionBorder = motion(Box);

function NavigationItem({ item, ...styles }) {
  const [hover, setHover] = useState(false);

  const variants = {
    hidden: { width: 0 },
    visible: {
      width: "auto",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };
  return (
    <Box
      w="auto"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <TextTap
        cursor="pointer"
        fontSize="md"
        fontWeight="medium"
        mx="2"
        textTransform="uppercase"
        {...styles}
      >
        {item}
      </TextTap>
      <MotionBorder
        initial="hidden"
        animate={hover ? "visible" : "hidden"}
        variants={variants}
        w="full"
        bg="black"
        h="0.5"
        borderRadius="lg"
      />
    </Box>
  );
}

export default NavigationItem;
