import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRegSmileBeam, FaRegSmileWink, FaRegSmile } from "react-icons/fa";

const MotionBox = motion(Box);

function SmilerAssistant() {
  return (
    <>
      <MotionBox
        whileTap={{ scale: 1.1, rotate: [0, 90, 0, -90, 180, -280, 360] }}
      >
        {/* <FaRegSmile size="24" /> */}
        <FaRegSmileBeam size="24" />
        {/* <FaRegSmileWink size="24" /> */}
      </MotionBox>
    </>
  );
}

export default SmilerAssistant;
