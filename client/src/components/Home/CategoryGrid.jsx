import { VStack } from "@chakra-ui/react";
import UpperGrid from "./categoryGrids/UpperGrid";
import MiddleGrid from "./categoryGrids/MiddleGrid";
import LowerGrid from "./categoryGrids/LowerGrid";

function CategoryGrid({ categories, banner1, banner2 }) {
  return (
    <VStack my="5" w="full" spacing="5">
      {/*  row 1 */}
      <UpperGrid categories={categories.slice(0, 4)} />
      {banner1}
      {/*  row 2 */}
      <MiddleGrid categories={categories.slice(4, 8)} />
      {banner2}
      {/*  row 3 */}
      <LowerGrid categories={categories.slice(8)} />
    </VStack>
  );
}

export default CategoryGrid;
