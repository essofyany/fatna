import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

function FooterAccordion() {
  return (
    <Accordion pt="5" pb="16">
      <AccordionItem border="none">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" textTransform="uppercase">
                  get in touch
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack justifyContent="left" alignItems="flex-start">
                <Box w="full" d="flex" alignItems="center">
                  <Box w="8">
                    <HiOutlineLocationMarker size="18" />
                  </Box>
                  <Text textTransform="capitalize" fontSize="sm">
                    Avenue Massira 214 Milano, Mars Rabat, Venus
                  </Text>
                </Box>
                <Box w="full" d="flex" alignItems="center">
                  <Box w="8">
                    <HiOutlineMail size="18" />
                  </Box>
                  <Text textTransform="capitalize" fontSize="sm">
                    sarcasm.meme@gmail.com
                  </Text>
                </Box>
                <Box w="full" d="flex" alignItems="center">
                  <Box w="8">
                    <HiOutlinePhone size="18" />
                  </Box>
                  <Text textTransform="capitalize" fontSize="sm">
                    +212 123456789
                  </Text>
                </Box>
                <Box d="flex" justifyContent="center" alignItems="center"></Box>
              </VStack>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem border="none">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" textTransform="uppercase">
                  help
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack justifyContent="left" alignItems="flex-start">
                <Text cursor="pointer" textTransform="capitalize" fontSize="sm">
                  contact us
                </Text>
                <Text cursor="pointer" textTransform="capitalize" fontSize="sm">
                  shipping / delivery
                </Text>
                <Text cursor="pointer" textTransform="capitalize" fontSize="sm">
                  privacy policy
                </Text>
                <Text cursor="pointer" textTransform="capitalize" fontSize="sm">
                  refund policy
                </Text>
                <Text cursor="pointer" textTransform="capitalize" fontSize="sm">
                  terms of service
                </Text>
              </VStack>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem border="none">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" textTransform="uppercase">
                  quick links
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack justifyContent="left" alignItems="flex-start">
                <Text cursor="pointer" textTransform="capitalize" fontSize="sm">
                  my account
                </Text>
                <Text cursor="pointer" textTransform="capitalize" fontSize="sm">
                  become a promoter
                </Text>
                <Text cursor="pointer" textTransform="capitalize" fontSize="sm">
                  track your order
                </Text>
                <Text cursor="pointer" textTransform="capitalize" fontSize="sm">
                  about us
                </Text>
                <Text cursor="pointer" textTransform="capitalize" fontSize="sm">
                  customer reviews
                </Text>
              </VStack>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem border="none">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" textTransform="uppercase">
                  about us
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Fatna Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus molestias ex, tempora fuga mollitia impedit.
              Praesentium quisquam provident fugit eum corrupti dicta explicabo.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

export default FooterAccordion;
