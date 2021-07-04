import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import {
  HiCurrencyDollar,
  HiCurrencyEuro,
  HiCurrencyPound,
  HiCurrencyRupee,
  HiCurrencyYen,
} from "react-icons/hi";
import IconTap from "../Motions/IconTap";

function CurrencyMenuAccordion() {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box d="flex" flex="1" textAlign="left">
                  <HiCurrencyDollar size="22" />
                  <Text px="1" fontWeight="medium">
                    USD
                  </Text>
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <IconTap>
                <Box
                  w="full"
                  py="2"
                  px="1"
                  borderBottom="1px solid lightGrey"
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
                  py="2"
                  px="1"
                  borderBottom="1px solid lightGrey"
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
                  py="2"
                  px="1"
                  borderBottom="1px solid lightGrey"
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
                  py="3"
                  px="1"
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
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

export default CurrencyMenuAccordion;
