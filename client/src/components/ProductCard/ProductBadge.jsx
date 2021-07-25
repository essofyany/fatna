import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBadge = motion(Box);

function ProductBadge({ badge, pos = 0 }) {
  return (
    <MotionBadge
      initial={{ opacity: 0, x: 30 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          ease: "easeOut",
          duration: 0.6,
        },
      }}
      px="1"
      bg="black"
      position="absolute"
      top={pos}
      // mb={{ base: "0", md: "2", lg:'5' }}
    >
      <Text
        fontSize={{ base: "10", md: "14" }}
        // fontSize="10"
        color="white"
        textTransform="uppercase"
      >
        {badge}
      </Text>
    </MotionBadge>
  );
}

export default ProductBadge;
