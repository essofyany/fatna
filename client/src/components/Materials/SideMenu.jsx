import {
  Box,
  Grid,
  GridItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import Btn from "./Btn";
import NavigationList from "../Layout/NavigationList";
import CurrencyMenuAccordion from "../Materials/CurrencyMenuAccordion";

function SideMenu({ isOpen, onClose, btnRef }) {
  const navList = [
    "women",
    "men",
    "kids",
    "accessories",
    "collections",
    "best seller",
    "new arrivals",
    "search",
    "login / register",
  ];

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="xs"
    >
      <DrawerOverlay />
      <DrawerContent bg="white" color="black">
        {/* Header */}
        <DrawerHeader p="0">
          <Grid
            // w="full"
            templateColumns="repeat(3, 1fr)"
            borderBottom="0.5px solid lightGrey"
          >
            <GridItem
              cursor="pointer"
              p="5"
              colSpan="1"
              borderRight="1px solid lightGrey"
              borderBottom="3px solid black"
            >
              <Box fontSize="sm" textAlign="center" textTransform="uppercase">
                shop
              </Box>
            </GridItem>
            <GridItem
              cursor="pointer"
              p="5"
              colSpan="2"
              borderRight="1px solid lightGrey"
              _hover={{
                borderBottom: "2px solid black",
              }}
            >
              <Box fontSize="sm" textAlign="center" textTransform="uppercase">
                what's your style?
              </Box>
            </GridItem>
          </Grid>
        </DrawerHeader>
        {/* body */}
        <DrawerBody p="0" overflow="hidden">
          <NavigationList
            navList={navList}
            p="3"
            borderBottom="0.5px lightGrey solid"
            textTransform="capitalize"
            onClick={onClose}
          />
          {/* todo: add currency accordion here */}
          <CurrencyMenuAccordion />
        </DrawerBody>
        {/* footer */}
        <DrawerFooter>
          <Btn variant="outline" onClick={onClose} w="full">
            Cancel
          </Btn>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default SideMenu;
