import Link from "next/link";
import { useRef } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import { RiHeart3Line, RiSearchLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import IconTap from "../Motions/IconTap";
import NavigationList from "./NavigationList";
import SocialIconsStack from "../Materials/SocialIconsStack";
import CurrencyMenu from "../Materials/CurrencyMenu";
import SideMenu from "../Materials/SideMenu";
import SmilerAssistant from "../Materials/SmilerAssistant";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuBtnRef = useRef();
  const navList = ["women", "men", "kids", "accessories", "collections"];
  return (
    <>
      <VStack
        w="full"
        bg="black"
        pos={{ base: "fixed", md: "fixed", lg: "initial" }}
        top="0"
        right="0"
        zIndex="modal"
        spacing="0"
      >
        {/* Sub Header */}
        <Grid
          w="full"
          templateColumns={{ base: '"repeat(1, 1fr)"', lg: "repeat(4, 1fr)" }}
          gap={5}
          px="5"
          py="3"
          alignItems="center"
        >
          <GridItem colSpan="1" d={{ base: "none", lg: "inline" }}>
            <SocialIconsStack />
          </GridItem>
          <GridItem colSpan="2">
            <Text
              textTransform="uppercase"
              color="white"
              zIndex="modal"
              fontSize={{ base: "sm", lg: "md" }}
              textAlign="center"
            >
              free shipping worldwide
            </Text>
          </GridItem>
          <GridItem
            colSpan="1"
            justifySelf="end"
            d={{ base: "none", lg: "inline" }}
          >
            <CurrencyMenu />
          </GridItem>
        </Grid>

        {/* Main Header */}
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          w="full"
          h={{ base: "12", md: "12", lg: "auto" }}
          px={{ base: "3", lg: "5" }}
          py={{ base: "0", lg: "3" }}
          borderBottom={{ base: "1px solid #ddd", lg: "none" }}
          bg="#fff"
          color="black"
        >
          {/* Menu icon on mobile/tablet screen  */}
          <IconTap
            ref={menuBtnRef}
            onClick={onOpen}
            responsive={{ base: "block", lg: "none" }}
          >
            {/* <BsArrowLeft size="34" /> */}
            <HiOutlineMenuAlt1 size="34" />
          </IconTap>
          <Link href="/">
            <Heading
              flex={{ lg: "auto" }}
              fontSize="3xl"
              fontWeight="semibold"
              cursor="pointer"
              mx={{ base: "auto", lg: "initial" }}
            >
              fatna
            </Heading>
          </Link>

          {/*Icons on mobile/tablet screen */}
          {/* use a smile assisstant emoji instead */}
          <Box d={{ base: "block", lg: "none" }}>
            <IconTap>
              <SmilerAssistant />
            </IconTap>
          </Box>

          {/* Categories On large screen only */}
          <Box
            d={{ base: "none", lg: "flex" }}
            flex="auto"
            justifyContent="center"
          >
            <NavigationList navList={navList} />
          </Box>

          {/* Icons on large screen */}
          <Box
            d={{ base: "none", lg: "flex" }}
            flex="auto"
            justifyContent="flex-end"
          >
            <IconTap mx="3">
              <RiSearchLine size="22" />
            </IconTap>
            <IconTap mx="3">
              <FiShoppingCart size="22" />
            </IconTap>
            <IconTap mx="3">
              <RiHeart3Line size="22" />
            </IconTap>
            <IconTap mx="3">
              <BiUser size="22" />
            </IconTap>
          </Box>
        </Box>
      </VStack>
      {/* Side Menu Drawer */}
      <SideMenu isOpen={isOpen} onClose={onClose} btnRef={menuBtnRef} />
    </>
  );
}

export default Header;
