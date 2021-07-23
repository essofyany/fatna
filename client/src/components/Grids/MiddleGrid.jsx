import { Grid, GridItem, useBreakpoint } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";

function MiddleGrid({ categories }) {
  const breakpiont = useBreakpoint({ base: "sm", sm: "md" });
  const sizes = ["md", "lg", "xl", "2xl"];

  return (
    <>
      {sizes.includes(breakpiont) ? (
        <Grid w="full" h="full" gap={8} templateColumns="repeat(5, 1fr)">
          <GridItem colSpan="2">
            <CategoryCard category={categories[0]} />
          </GridItem>
          <GridItem w="full" h="full" colSpan="1">
            <Grid gap={8} templateRows="repeat(2, 1fr)" w="full" h="full">
              {categories.slice(1, 3).map((item, idx) => (
                <GridItem w="full" h="full" key={idx} rowSpan="1">
                  <CategoryCard category={item} />
                </GridItem>
              ))}
            </Grid>
          </GridItem>
          <GridItem colSpan="2">
            <CategoryCard category={categories[3]} />
          </GridItem>
        </Grid>
      ) : (
        <Grid gap={8} templateColumns="repeat(2, 1fr)" w="full" h="full">
          {categories.map((item, idx) => (
            <GridItem w="full" h="60" key={idx} rowSpan="1">
              <CategoryCard fontSize="2xl" category={item} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
}

export default MiddleGrid;
