import { Grid, GridItem, useBreakpoint } from "@chakra-ui/react";
import CategoryCard from "../CategoryCard";

function LowerGrid({ categories }) {
  const breakpiont = useBreakpoint({ base: "sm", sm: "md" });
  const sizes = ["md", "lg", "xl", "2xl"];
  // console.log(breakpiont);

  return (
    <>
      {sizes.includes(breakpiont) ? (
        <Grid w="full" gap={4} templateColumns="repeat(4, 1fr)">
          <GridItem colSpan="1">
            <Grid gap={4} templateRows="repeat(2, 1fr)">
              {categories.slice(0, 2).map((item, idx) => (
                <GridItem key={idx} rowSpan="auto">
                  <CategoryCard category={item} />
                </GridItem>
              ))}
            </Grid>
          </GridItem>

          <GridItem colSpan="2">
            <CategoryCard
              fontSize={{ sm: "2xl", md: "5xl" }}
              category={categories[2]}
            />
          </GridItem>

          <GridItem colSpan="1">
            <Grid gap={4} templateRows="repeat(2, 1fr)">
              {categories.slice(3).map((item, idx) => (
                <GridItem key={idx} rowSpan="auto">
                  <CategoryCard fontSize={{ md: "3xl" }} category={item} />
                </GridItem>
              ))}
            </Grid>
          </GridItem>
        </Grid>
      ) : (
        <>
          <Grid gap={4} templateColumns="repeat(2, 1fr)">
            {categories.slice(0, 2).map((item, idx) => (
              <GridItem key={idx} rowSpan="auto">
                <CategoryCard
                  fontSize={{ base: "2xl", sm: "5xl" }}
                  category={item}
                />
              </GridItem>
            ))}
          </Grid>
          <CategoryCard
            fontSize={{ base: "2xl", sm: "6xl" }}
            category={categories[2]}
          />
          <Grid gap={4} templateColumns="repeat(2, 1fr)">
            {categories.slice(3, 5).map((item, idx) => (
              <GridItem key={idx} rowSpan="auto">
                <CategoryCard
                  fontSize={{ base: "2xl", sm: "5xl" }}
                  category={item}
                />
              </GridItem>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}

export default LowerGrid;
