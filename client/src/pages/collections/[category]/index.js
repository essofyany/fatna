import { useEffect, useRef } from "react";
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
  useDisclosure,
} from "@chakra-ui/react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Banner from "../../../components/Materials/Banner";
import Filter from "../../../components/Materials/Filter";
import SideMenu from "../../../components/Materials/SideMenu";
import {
  ViewIcons1,
  ViewIcons2,
  ViewIcons3,
  ViewIcons4,
} from "../../../Icons/ViewIcons";
import { setView } from "../../../features/viewsSlice";
import { BiFilter, BiFilterAlt } from "react-icons/bi";

function ProductsList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const filterBtnRef = useRef();
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
        <Box d="flex" alignItems="center" w="33%" p="3">
          <BiFilterAlt size="21" />
          <Text
            cursor="pointer"
            ml="2"
            fontSize="lg"
            ref={filterBtnRef}
            onClick={onOpen}
            fontWeight="medium"
          >
            Filter by
          </Text>
        </Box>
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
        <Box
          d="flex"
          alignItems="center"
          justifyContent="flex-end"
          w="33%"
          p="3"
        >
          <BiFilter size="24" />
          <Text ml="2" fontSize="lg" fontWeight="medium">
            Sort by
          </Text>
        </Box>
      </Box>
      {/* products list and Filter(> L screen ) */}
      <Grid
        w="full"
        my="5"
        gap={5}
        templateColumns={{ base: "repeat(4,1fr)", lg: "repeat(5,1fr)" }}
      >
        {/* filter area */}
        <GridItem colSpan="1" w="full" d={{ base: "none", lg: "initial" }}>
          <Filter />
        </GridItem>
        {/* Products list area */}
        <GridItem w="full" colSpan="4">
          <Grid
            w="full"
            gap={4}
            templateColumns={gridView ? gridView : gridTemplates}
          >
            {list.map((item) => (
              <GridItem colSpan="auto" key={item}>
                <ProductCard />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
      {/* Filter Menu on md screen and below*/}
      <SideMenu
        btnRef={filterBtnRef}
        isOpen={isOpen}
        onClose={onClose}
        navList=""
      >
        <Filter forDrawer={true} />
      </SideMenu>
    </>
  );
}

export default ProductsList;
