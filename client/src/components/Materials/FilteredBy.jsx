import { Box, VStack, Text, Input, Checkbox } from "@chakra-ui/react";
import Btn from "./Btn";

function FilteredBy({ filterByTitle, filterBy = "search" }) {
  return (
    <VStack w="full" spacing="2" alignItems="start">
      <Text
        fontWeight="semibold"
        textTransform="capitalize"
        pr="2"
        borderBottom="2px solid black"
        mb="3"
      >
        {filterByTitle}
      </Text>
      <>
        {filterBy === "search" && (
          <Box w="full">
            <Input
              placeholder="Product title . . . "
              size="sm"
              border="1px solid black"
              colorScheme="blackAlpha"
              _focus={{ outline: "none", border: "1px solid black" }}
            />
            <Btn size="sm" w="full" mt="2" fontSize="sm" py="0">
              Filter
            </Btn>
          </Box>
        )}
        {filterBy === "size" && (
          <VStack spacing={2} w="full" alignItems="start">
            <Checkbox colorScheme="blackAlpha">x-small (XS)</Checkbox>
            <Checkbox colorScheme="blackAlpha">small (S)</Checkbox>
            <Checkbox colorScheme="blackAlpha">medium (M)</Checkbox>
            <Checkbox colorScheme="blackAlpha">large (L)</Checkbox>
            <Checkbox colorScheme="blackAlpha">x-large (XL)</Checkbox>
            <Checkbox colorScheme="blackAlpha">xx-large (XXL)</Checkbox>
          </VStack>
        )}
        {filterBy === "color" && (
          <VStack spacing={2} w="full" alignItems="start">
            <Checkbox colorScheme="red" textTransform="capitalize">
              red
            </Checkbox>
            <Checkbox colorScheme="blue" textTransform="capitalize">
              blue
            </Checkbox>
            <Checkbox colorScheme="cyan" textTransform="capitalize">
              cyan
            </Checkbox>
            <Checkbox colorScheme="green" textTransform="capitalize">
              green
            </Checkbox>
            <Checkbox colorScheme="pink" textTransform="capitalize">
              pink
            </Checkbox>
            <Checkbox colorScheme="teal" textTransform="capitalize">
              teal
            </Checkbox>
            <Checkbox colorScheme="purple" textTransform="capitalize">
              purple
            </Checkbox>
            <Checkbox colorScheme="yellow" textTransform="capitalize">
              yellow
            </Checkbox>
            <Checkbox colorScheme="orange" textTransform="capitalize">
              orange
            </Checkbox>
          </VStack>
        )}
      </>
    </VStack>
  );
}

export default FilteredBy;
