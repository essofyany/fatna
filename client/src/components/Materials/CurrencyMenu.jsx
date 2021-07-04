import { useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import {
  HiCurrencyDollar,
  HiCurrencyEuro,
  HiCurrencyPound,
  HiCurrencyRupee,
  HiCurrencyYen,
} from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import IconTap from "../Motions/IconTap";
import { motion, AnimatePresence } from "framer-motion";

const MotionVStack = motion(VStack);

function CurrencyMenu() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

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
        <HiCurrencyDollar size="22" />
        <Text px="1" fontWeight="medium">
          USD
        </Text>
        <IoIosArrowDown size="16" />
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
              <IconTap>
                <Box
                  w="full"
                  px="8"
                  opacity="1"
                  d="flex"
                  alignItems="center"
                  color="black"
                  cursor="pointer"
                >
                  <HiCurrencyEuro size="22" />
                  <Text px="1" fontWeight="medium">
                    EUR
                  </Text>
                </Box>
              </IconTap>
              <IconTap>
                <Box
                  w="full"
                  px="8"
                  opacity="1"
                  d="flex"
                  alignItems="center"
                  color="black"
                  cursor="pointer"
                >
                  <HiCurrencyPound size="22" />
                  <Text px="1" fontWeight="medium">
                    PND
                  </Text>
                </Box>
              </IconTap>
              <IconTap>
                <Box
                  w="full"
                  px="8"
                  opacity="1"
                  d="flex"
                  alignItems="center"
                  color="black"
                  cursor="pointer"
                >
                  <HiCurrencyYen size="22" />
                  <Text px="1" fontWeight="medium">
                    YEN
                  </Text>
                </Box>
              </IconTap>
              <IconTap>
                <Box
                  w="full"
                  px="8"
                  opacity="1"
                  d="flex"
                  alignItems="center"
                  color="black"
                  cursor="pointer"
                >
                  <HiCurrencyRupee size="22" />
                  <Text px="1" fontWeight="medium">
                    RUP
                  </Text>
                </Box>
              </IconTap>
            </MotionVStack>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
}

export default CurrencyMenu;
