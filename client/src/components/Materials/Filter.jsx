import { VStack } from "@chakra-ui/react";
import PriceSliderFilter from "./PriceSliderFilter";
import FilteredBy from "./FilteredBy";



function Filter() {
  return (
    <>
      <VStack w="full" spacing="8">
        <FilteredBy filterByTitle="by title" />
        <PriceSliderFilter />
        <FilteredBy filterByTitle="by sizes" filterBy="size" />
        <FilteredBy filterByTitle="by color" filterBy="color" />
        {/* <FilteredBy filterByTitle="by vendor" filterBy="vendor" /> */}
      </VStack>
    </>
  );
}

export default Filter;
