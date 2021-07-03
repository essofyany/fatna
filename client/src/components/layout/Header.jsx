import Link from "next/link";
import { Box, Text, Heading, Center, VStack } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import { CgClose, CgShoppingBag } from "react-icons/cg";
import { RiHeart3Line, RiSearchLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import IconTap from "../Motions/IconTap";

function Header() {
  return (
    <VStack
      w="full"
      bg="black"
      pos={{ base: "fixed", md: "fixed", lg: "initial" }}
      top="0"
      right="0"
      zIndex="modal"
      spacing="0"
    >
      <Center
        d="flex"
        alignItems="center"
        justifyContent="center"
        w="full"
        py="3"
        px={{ base: "3", lg: "5" }}
        bg="black"
      >
        <Text
          textTransform="uppercase"
          color="white"
          zIndex="modal"
          fontSize={{ base: "sm", lg: "md" }}
        >
          free shipping worldwide
        </Text>
      </Center>
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
        <IconTap responsive={{ base: "block", lg: "none" }}>
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
        <Box d={{ base: "block", lg: "none" }}>
          <IconTap>
            <CgClose size="28" />
          </IconTap>
        </Box>

        {/* Categories On large screen only */}
        <Box
          d={{ base: "none", lg: "flex" }}
          flex="auto"
          justifyContent="center"
        >
          <Text cursor="pointer" fontSize="lg" fontWeight="medium" mx="2">
            Women
          </Text>
          <Text cursor="pointer" fontSize="lg" fontWeight="medium" mx="2">
            Men
          </Text>
          <Text cursor="pointer" fontSize="lg" fontWeight="medium" mx="2">
            Kids
          </Text>
          <Text cursor="pointer" fontSize="lg" fontWeight="medium" mx="2">
            Accessories
          </Text>
          <Link href="/collections">
            <Text cursor="pointer" fontSize="lg" fontWeight="medium" mx="2">
              Collections
            </Text>
          </Link>
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
  );
}

export default Header;
