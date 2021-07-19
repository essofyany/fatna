import { useEffect, useState } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const MotionVStack = motion(VStack);

function CurrencyMenu() {
  const currentCurrency = useSelector((state) => state.currency.current);
  const currencies = useSelector((state) => state.currency.currencyList);
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  useEffect(() => {
    setIsExpanded(false);
  }, [currentCurrency.name]);

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
        {currentCurrency.selectedComponent}
        {/* <USD selected={true} /> */}
      </Box>
      {/* currency menu */}
      <Box pos="relative">
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
              {currencies.map((item) => {
                return <>{item.component}</>;
              })}
            </MotionVStack>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
}

export default CurrencyMenu;
