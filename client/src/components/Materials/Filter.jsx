import { VStack } from "@chakra-ui/react";
import PriceSliderFilter from "./PriceSliderFilter";
import FilteredBy from "./FilteredBy";

function Filter({ forDrawer = false }) {
  return (
    <VStack w="full" spacing="8">
      <FilteredBy
        withBtn={forDrawer ? false : true}
        filterByTitle="by Product name"
      />
      <PriceSliderFilter withBtn={forDrawer ? false : true} />
      <FilteredBy filterByTitle="by sizes" filterBy="size" />
      <FilteredBy filterByTitle="by color" filterBy="color" />
      {/* <FilteredBy filterByTitle="by vendor" filterBy="vendor" /> */}
    </VStack>
  );
}

export default Filter;
