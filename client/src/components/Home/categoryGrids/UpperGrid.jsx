import { Grid, GridItem } from "@chakra-ui/react";
import CategoryCard from "../CategoryCard";

function UpperGrid({ categories }) {
  return (
    <Grid
      w="full"
      gap={4}
      templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
    >
      {categories.map((item, idx) => (
        <GridItem colSpan="auto" key={idx}>
          <CategoryCard key={item.id} category={item} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default UpperGrid;
