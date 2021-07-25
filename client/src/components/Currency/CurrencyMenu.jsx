import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Box, VStack, useOutsideClick } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { USD, EUR, PND, RUP, YEN, currencySelector } from "./Currencies";

const MotionVStack = motion(VStack);

function CurrencyMenu() {
  const currentCurrency = useSelector((state) => state.currency.current);
  const [isExpanded, setIsExpanded] = useState(false);
  const menuRef = useRef();

  useOutsideClick({
    ref: menuRef,
    handler: () => setIsExpanded(false),
  });

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  useEffect(() => {
    setIsExpanded(false);
  }, [currentCurrency]);

  return (
    <>
      {/* current currency */}
      <Box
        onClick={handleClick}
        d="flex"
        alignItems="center"
        color="white"
        cursor="pointer"
      >
        {currencySelector(currentCurrency).selectedComponent}
      </Box>
      {/* currency menu */}
      <Box pos="relative" ref={menuRef}>
        <AnimatePresence>
          {isExpanded && (
            <MotionVStack
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { durration: 0.2 } }}
              exit={{ y: 10, opacity: 0, transition: { durration: 0.2 } }}
              pos="absolute"
              right="-1"
              top="2"
              zIndex="modal"
              borderRadius="sm"
              bg="#fff"
              opacity="0.95"
              boxShadow="lg"
              py="3"
              w="32"
            >
              <USD _hover={{ fontWeight: "semibold" }} />
              <EUR _hover={{ fontWeight: "semibold" }} />
              <YEN _hover={{ fontWeight: "semibold" }} />
              <PND _hover={{ fontWeight: "semibold" }} />
              <RUP _hover={{ fontWeight: "semibold" }} />
            </MotionVStack>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
}

export default CurrencyMenu;
