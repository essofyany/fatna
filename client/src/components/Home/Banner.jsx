// import Image from "next/image";
import { Box, Center, Text, Heading } from "@chakra-ui/react";
import { RiUserStarFill } from "react-icons/ri";

// TODO: add banner image background (svg patterns)

function Banner({ main, sub, withImage, ...styles }) {
  return (
    <Center
      mt={{ base: "16", lg: "5" }}
      textAlign="center"
      bg="black"
      color="white"
      w="full"
      px="12"
      py="7"
      flexDir="column"
      {...styles}
    >
      {sub ? (
        <Box d="flex" alignItems="center">
          <RiUserStarFill />
          <Text
            mx="1"
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            fontWeight="medium"
          >
            ' {sub}
          </Text>
        </Box>
      ) : null}
      {/* {withImage ? <Image src="" /> : null} */}
      <Heading
        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        fontWeight="semibold"
      >
        {main}
      </Heading>
    </Center>
  );
}

export default Banner;
