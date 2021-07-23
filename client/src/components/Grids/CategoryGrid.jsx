import { VStack } from "@chakra-ui/react";
import UpperGrid from "./UpperGrid";
import MiddleGrid from "./MiddleGrid";
import LowerGrid from "./LowerGrid";

function CategoryGrid({ categories, banner1, banner2 }) {
  return (
    <VStack my="5" w="full" spacing="10">
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
