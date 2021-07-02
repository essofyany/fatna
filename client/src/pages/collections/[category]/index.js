import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  Box,
  Grid,
  GridItem,
  Center,
  useBreakpointValue,
  useBreakpoint,
} from "@chakra-ui/react";
import Banner from "../../../components/Materials/Banner";
import ProductCard from "../../../components/ProductCard/ProductCard";
import {
  ViewIcons1,
  ViewIcons2,
  ViewIcons3,
  ViewIcons4,
} from "../../../Icons/ViewIcons";
import { setView } from "../../../features/viewsSlice";

function ProductsList() {
  const dispatch = useDispatch();

  const gridView = useSelector((state) => state.views.gridType);
  const selectedView = useSelector((state) => state.views.selectedView);

  const views = useBreakpoint();
  const gridTemplates = useBreakpointValue({
    base: "repeat(2,1fr)",
    md: "repeat(3,1fr)",
    lg: "repeat(4,1fr)",
  });

  useEffect(() => {
    dispatch(setView(null));
  }, [views]);

  // console.log(views);
  const router = useRouter();
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <>
      <Banner textTransform="uppercase" main={router.query.category} />
      {/* filter / sort / view panel*/}
      {/* // TODO: fix grid views icons activation */}
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        w="full"
        my="5"
      >
        <Center w="33%" bg="red.100" p="3">
          <Text>Sort</Text>
        </Center>
        <Center w="33%" p="3" justifyContent="space-evenly">
          {(views === "base" || views === "sm") && (
            <>
              <ViewIcons1 selectedView={!selectedView.base} />
              <ViewIcons2 selectedView={selectedView.base} />
            </>
          )}
          {views === "md" && (
            <>
              <ViewIcons2 selectedView={!selectedView.md} />
              <ViewIcons3 selectedView={selectedView.md} />
            </>
          )}
          {views !== "md" && views !== "sm" && views !== "base" && (
            <>
              <ViewIcons3 selectedView={!selectedView.lg} />
              <ViewIcons4 selectedView={selectedView.lg} />
            </>
          )}
        </Center>
        <Center w="33%" bg="blue.100" p="3">
          <Text>Filter</Text>
        </Center>
      </Box>
      {/* products list */}
      <Grid
        w="full"
        my="5"
        templateColumns={{
          base: gridTemplates,
          md: gridTemplates,
          lg: gridTemplates,
        }}
        gap={4}
        templateColumns={
          gridView
            ? gridView
            : {
                base: gridTemplates,
                md: gridTemplates,
                lg: gridTemplates,
              }
        }
      >
        {list.map((item) => (
          <GridItem key={item}>
            <ProductCard />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default ProductsList;
