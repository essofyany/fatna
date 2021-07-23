import React, { useState } from "react";
import {
  Grid,
  GridItem,
  Text,
  useDisclosure,
  SlideFade,
} from "@chakra-ui/react";
import CurrencyMenu from "../Currency/CurrencyMenu";
import SocialIconsStack from "../Materials/SocialIconsStack";
import { useInterval } from "../../hooks/useInterval";

function SubHeader() {
  const { isOpen, onToggle } = useDisclosure();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navCarousel = [
    <Text
      key="OFF EVERYTHING"
      textTransform="uppercase"
      color="white"
      zIndex="modal"
      fontSize={{ base: "sm", lg: "md" }}
      textAlign="center"
    >
      free shipping worldwide
    </Text>,
    <Text
      key="OFF EVERYTHING"
      textTransform="uppercase"
      color="white"
      zIndex="modal"
      fontSize={{ base: "sm", lg: "md" }}
      textAlign="center"
    >
      up to 60% off everything
    </Text>,
    <Text
      key="OFF EVERYTHING"
      textTransform="uppercase"
      color="white"
      zIndex="modal"
      fontSize={{ base: "sm", lg: "md" }}
      textAlign="center"
    >
      use &#34; summertime &#34; for 10% off
    </Text>,
  ];
  useInterval(() => {
    if (selectedIndex >= navCarousel.length - 1) {
      setSelectedIndex(0);
      onToggle();
    } else {
      setSelectedIndex(selectedIndex + 1);
      onToggle();
    }
  }, 1500);
  return (
    <Grid
      w="full"
      templateColumns={{ base: '"repeat(1, 1fr)"', lg: "repeat(4, 1fr)" }}
      gap={5}
      px="5"
      py="3"
      alignItems="center"
    >
      {/* social icons */}
      <GridItem colSpan="1" d={{ base: "none", lg: "inline" }}>
        <SocialIconsStack />
      </GridItem>
      {/* navCarousel */}
      <GridItem colSpan="2">
        <SlideFade in={isOpen} offsetY="10px">
          {navCarousel[selectedIndex]}
        </SlideFade>
      </GridItem>
      {/* currency menu */}
      <GridItem
        colSpan="1"
        justifySelf="end"
        d={{ base: "none", lg: "inline" }}
      >
        <CurrencyMenu />
      </GridItem>
    </Grid>
  );
}

export default SubHeader;
