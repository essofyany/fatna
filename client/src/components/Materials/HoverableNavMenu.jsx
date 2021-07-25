import { Box, Text, SlideFade } from "@chakra-ui/react";

function HoverableNavMenu({ isOpen, onOpen, onClose, children }) {
  // const {isOpen} = useDisclosure()
  return (
    <SlideFade in={isOpen} offsetY="20px">
      <Box position="relative">
        <Box
          onMouseOver={() => onOpen()}
          onMouseOut={() => onClose()}
          border="1px solid black"
          w="2xl"
          position="absolute"
          top="4"
          left="-40"
          p="40px"
          color="black"
          bg="white"
          rounded="sm"
          shadow="lg"
          zIndex="overlay"
        >
          <Text fontSize="xl">{children}</Text>
        </Box>
      </Box>
    </SlideFade>
  );
}

export default HoverableNavMenu;
