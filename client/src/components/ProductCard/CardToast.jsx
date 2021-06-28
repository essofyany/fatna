import { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { motion, usePresence } from "framer-motion";
import { FaClipboardList } from "react-icons/fa";

const MotionBox = motion(Box);

function CardToast({ setCardState, cardState, ...styles }) {
  const [isPresent, safeToRemove] = usePresence();

  function handleHeart() {
    setCardState({ ...cardState, isHearted: false });
  }

  const delay = () => {
    setTimeout(() => {
      //   handleHeart();
      const exit = {
        height: 0,
        opacity: 0,
        transition: { type: "spring", ease: "easeIn", duration: 0.2 },
      };
      return exit;
    }, 1000);
  };

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 2000);
  }, [isPresent]);

  return (
    <MotionBox
      {...styles}
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: "auto",
        opacity: 1,
        transition: { type: "tween", ease: "easeOut", duration: 0.2 },
      }}
      exit={delay()}
      bg="black"
      h="auto"
      color="white"
    >
      <Box d="flex" alignItems="center" h="8" p="3">
        <FaClipboardList size="17" />
        <Text mx="1.5" fontSize={["xs", "xs", "sm"]} fontWeight="medium">
          Added to Wishlist
        </Text>
      </Box>
    </MotionBox>
  );
}

export default CardToast;
