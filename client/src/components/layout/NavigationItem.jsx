import { useState } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import TextTap from "../Motions/TextTap";
import { motion } from "framer-motion";
import HoverableNavMenu from "../Materials/HoverableNavMenu";

const MotionBorder = motion(Box);

function NavigationItem({ item, ...styles }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [hover, setHover] = useState(false);

  const variants = {
    hidden: { width: 0 },
    visible: {
      width: "auto",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };
  return (
    <>
      <Box
        w="auto"
        py="5"
        onMouseOver={() => {
          setHover(true);
          onOpen();
        }}
        onMouseOut={() => {
          setHover(false);
          onClose();
        }}
      >
        <TextTap
          cursor="pointer"
          fontSize="lg"
          fontWeight="medium"
          mx="4"
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
      {/* TODO: add hoverable dropdown menu for navigation items */}
      {/* <HoverableNavMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        {item}
      </HoverableNavMenu> */}
    </>
  );
}

export default NavigationItem;
