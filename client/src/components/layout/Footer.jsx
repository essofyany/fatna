import { Box } from "@chakra-ui/react";
// import { BsCollection } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { RiHeart2Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import IconTap from "../Motions/IconTap";
import Search from "../Search/Search";

function Footer() {
  return (
    <Box
      d={{ base: "flex", lg: "none" }}
      justifyContent="space-around"
      alignItems="center"
      w="full"
      h="12"
      px="1"
      pos="fixed"
      bottom="0"
      right="0"
      bg="#fff"
      borderTop="1px solid #ddd"
      color="black"
      zIndex="modal"
    >
      <IconTap>
        <HiOutlineHome size="30" />
      </IconTap>
      {/* search Icon with modal */}
      <Search size="30" isMobile={true} />
      {/*  */}
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
