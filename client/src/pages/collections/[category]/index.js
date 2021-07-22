import { useRef } from "react";
import { useRouter } from "next/router";
import {
  Text,
  Box,
  Grid,
  GridItem,
  Center,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Banner from "../../../components/Materials/Banner";
import Filter from "../../../components/Materials/Filter";
import SideMenu from "../../../components/Materials/SideMenu";
import { WideView, MediumView, SmallView } from "../../../Icons/ViewIcons";
import { BiFilterAlt } from "react-icons/bi";
import DynamicGrid from "../../../components/Materials/DynamicGrid";
import SortMenu from "../../../components/Materials/SortMenu";

function ProductsList({ products }) {
  console.log("products: ", products);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const filterBtnRef = useRef();
  const currentView = useBreakpointValue({
    base: "small",
    sm: "small",
    md: "medium",
    lg: "large",
    xl: "large",
  });

  // console.log(views);
  const router = useRouter();
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <>
      <Banner textTransform="uppercase" main={router.query.category} />
      {/* filter / sort / switch view */}
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        w="full"
        my="5"
      >
        {/* filter */}
        <Box d="flex" alignItems="center" w="33%" p="3">
          <BiFilterAlt size="21" onClick={onOpen} />
          <Text
            display={{ base: "none", sm: "initial" }}
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
        {/* switch views */}
        <Center w="33%" p="3" justifyContent="space-evenly">
          {currentView === "small" && <SmallView />}
          {currentView === "medium" && <MediumView />}
          {currentView === "large" && <WideView />}
        </Center>
        {/* sort  */}
        <Box
          position="relative"
          d="flex"
          w="33%"
          alignItems="center"
          justifyContent="flex-end"
        >
          <SortMenu />
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
          <DynamicGrid>
            {products.map((product) => (
              <GridItem colSpan="auto" key={product._id}>
                <ProductCard product={product} />
              </GridItem>
            ))}
          </DynamicGrid>
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

export async function getServerSideProps(ctx) {
  const res = await fetch("http://localhost:5000/api/product");
  const data = await res.json();
  return {
    props: {
      products: data.products,
    },
  };
}

export default ProductsList;
