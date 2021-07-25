import { Box, Center, Divider, Input, Text } from "@chakra-ui/react";
import React from "react";
import { GrClose } from "react-icons/gr";
import { RiSearchLine } from "react-icons/ri";
import IconTap from "../Motions/IconTap";

function SearchModal({modalRef, handleClose}) {
  return (
    <Box
      ref={modalRef}
      mx="auto"
      my={{ lg: "28" }}
      w={{ base: "full", lg: "3xl", xl: "5xl" }}
      h={{ base: "80vh", lg: "65vh" }}
      bg="white"
      boxShadow="lg"
      zIndex="modal"
    >
      {/* close btn */}
      <Box
        w="full"
        h="12"
        d="flex"
        px="5"
        alignItems="center"
        justifyContent="flex-end"
      >
        <IconTap
          onClick={handleClose}
        >
          <GrClose size="24" />
        </IconTap>
      </Box>
      {/* Input field */}
      <Box
        position="relative"
        w="full"
        h="20"
        d="flex"
        px="10"
        alignItems="center"
        justifyContent="flex-end"
        // bg='khaki'
      >
        <IconTap position="absolute" mr="5" zIndex="modal">
          <RiSearchLine size="24" />
        </IconTap>
        <Input
          type="text"
          size="lg"
          borderRadius="base"
          placeholder="Search for products"
          _focus={{ outline: "none" }}
          _hover={{ outline: "none" }}
        />
      </Box>
      {/* Divider */}
      <Divider />
      {/* searched items */}
      <Center w="full" h="full" bg="white">
        <Text fontSize="lg">
          No products were found matching your selection.
        </Text>
      </Center>
    </Box>
  );
}

export default SearchModal;
