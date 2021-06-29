import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBtn = motion(Button);

function Btn({ children, ...styles }) {
  return (
    <MotionBtn
      d="flex"
      alignItems="center"
      cursor="pointer"
      whileTap={{
        scale: 0.97,
        style: {
          x: 10,
        },
      }}
      px="14"
      py="4"
      border="1.5px solid black"
      borderRadius="0"
      bg="white"
      color="black"
      colorScheme="whiteAlpha"
      _focus={{ outline: "none" }}
      textTransform="capitalize"
      {...styles}
    >
      {children}
    </MotionBtn>
  );
}

export default Btn;
