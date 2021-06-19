import { Box, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";

export const MotionBox = motion(Box);
const HomePage = () => {
  return (
    // <MotionBox
    //   height="40px"
    //   bg="red.300"
    //   drag="y"
    //   dragConstraints={{ left: -100, right: 100 }}
    //   whileHover={{ scale: 1.1 }}
    //   whileTap={{ scale: 0.9 }}
    // />
    <Text>Body</Text>
  );
};

export default HomePage;
