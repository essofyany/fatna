import { Box } from "@chakra-ui/react";
import SectionTitle from "../components/Home/SectionTitle";
import ProductCard from "../components/ProductCard/ProductCard";

const HomePage = () => {
  return (
    <>
      <SectionTitle
        title="BEST SELLER AESTHETIC CLOTHES"
        subTitle="Discover our unique & cute aesthetic clothes."
      />

      <Box d="flex" justifyContent="center" flexWrap="wrap">
        <ProductCard />
      </Box>
    </>
  );
};

export default HomePage;
