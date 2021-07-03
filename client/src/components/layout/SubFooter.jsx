import {
  Box,
  Text,
  HStack,
  Grid,
  Center,
  GridItem,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { FaPaypal, FaAmazonPay, FaApplePay } from "react-icons/fa";
import { SiGooglepay, SiVisa, SiMastercard } from "react-icons/si";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import FooterAccordion from "./FooterAccordion";

function SubFooter() {
  const gridView = useBreakpointValue({
    base: "base",
    sm: "repeat(2, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)",
  });
  // console.log(gridView);

  return (
    <>
      <Box
        w="full"
        bg="black"
        color="white"
        py="5"
        px={{ base: "3", lg: "5" }}
        mb={{ base: "12", lg: "0" }}
      >
        {/* sub footer sections  */}
        {gridView === "base" && <FooterAccordion />}
        {gridView !== "base" && (
          <Grid pt="5" pb="16" w="full" templateColumns={gridView} gap={4}>
            <GridItem colSpan="auto">
              <VStack justifyContent="left" alignItems="flex-start">
                {/* title */}
                <Text textTransform="uppercase" fontWeight="medium" mb="3">
                  get in touch
                </Text>
                {/* content */}
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
            </GridItem>
            <GridItem colSpan="auto">
              <VStack justifyContent="left" alignItems="flex-start">
                {/* title */}
                <Text textTransform="uppercase" fontWeight="medium" mb="3">
                  help
                </Text>
                {/* content */}
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
            </GridItem>
            <GridItem colSpan="auto">
              <VStack justifyContent="left" alignItems="flex-start">
                {/* title */}
                <Text textTransform="uppercase" fontWeight="medium" mb="3">
                  quick links
                </Text>
                {/* content */}
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
            </GridItem>
            <GridItem colSpan="auto">
              <Text textTransform="uppercase" fontWeight="medium" mb="3">
                about us
              </Text>
              <Text fontSize="sm">
                Fatna Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus molestias ex, tempora fuga mollitia impedit.
                Praesentium quisquam provident fugit eum corrupti dicta
                explicabo.
              </Text>
            </GridItem>
          </Grid>
        )}
        {/* copyright and pay icons */}
        <Center
          alignItems="center"
          justifyContent={{ base: "center", lg: "space-between" }}
          flexDir={{ base: "column", lg: "row" }}
          w="full"
        >
          <Text fontSize={{ base: "md", lg: "md" }} py="1">
            Copyright © 2021 fatna Clothing
          </Text>
          <HStack alignItems="center">
            <FaPaypal size="18" />
            <SiMastercard size="22" />
            <SiVisa size="32" />
            <FaAmazonPay size="28" />
            <FaApplePay size="38" />
            <SiGooglepay size="38" />
          </HStack>
        </Center>
      </Box>
    </>
  );
}

export default SubFooter;
