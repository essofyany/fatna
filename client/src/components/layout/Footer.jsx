import { Box } from "@chakra-ui/react";
import { BsCollection } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { RiHeart3Line, RiHeart2Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import IconTap from "../Motions/IconTap";

function Footer() {
  return (
    <Box
      d={{ base: "flex", lg: "none" }}
      justifyContent="space-around"
      alignItems="center"
      px="1"
      w="full"
      pos="fixed"
      bottom="0"
      right="0"
      bg="#fff"
      borderTop="1px solid #ddd"
      h="12"
      color="black"
    >
      <IconTap>
        <HiOutlineHome size="30" />
      </IconTap>
      <IconTap>
        <BsCollection size="30" />
      </IconTap>
      <IconTap>
        <CgShoppingBag size="30" />
      </IconTap>
      <IconTap>
        <RiHeart2Line size="30" />
      </IconTap>
      <IconTap>
        <BiUser size="30" />
      </IconTap>
    </Box>
  );
}

export default Footer;