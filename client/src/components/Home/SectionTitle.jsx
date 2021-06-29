import { Box, Heading, Text } from "@chakra-ui/react";

function SectionTitle({ title, subTitle, withBar = true }) {
  return (
    <Box my="5" w="full" textAlign="center">
      <Heading
        fontSize={{ base: "md", md: "lg" }}
        color="black"
        textTransform="uppercase"
      >
        {title}
      </Heading>
      {withBar ? (
        <Box border="2px solid black" mx="auto" my="0.5" maxW="sm" />
      ) : null}
      <Text fontSize="sm" color="gray.500">
        {subTitle}
      </Text>
    </Box>
  );
}

export default SectionTitle;
