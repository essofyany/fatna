import { Box, Heading, Text } from "@chakra-ui/react";

function SectionTitle({ title, subTitle }) {
  return (
    <Box mt={{ base: "16", lg: "5" }} mb="5" w="full" textAlign="center">
      <Heading fontSize="lg" color="black" textTransform="uppercase">
        {title}
      </Heading>
      <Box border="2px solid black" mx="auto" my="0.5" maxW='sm' />
      <Text fontSize="sm" color="gray.500">
        {subTitle}
      </Text>
    </Box>
  );
}

export default SectionTitle;
