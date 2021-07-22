import { useEffect } from "react";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { Box, Center, Text } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import SectionTitle from "../components/Home/SectionTitle";
import SlideShow from "../components/Home/SlideShow";
import Btn from "../components/Materials/Btn";
import Banner from "../components/Materials/Banner";
import CategoryGrid from "../components/Home/CategoryGrid";
import { getCategories } from "../features/categorySlice";

const HomePage = ({ categories, products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories(categories));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>fatna - Womens, Mens & Kids Clothes</title>
      </Head>
      <Banner
        main="Unlimited Free Next-Day Delivery for a whole year for $9.99"
        sub="Premier Delivery"
      />

      <SectionTitle
        title="BEST SELLER AESTHETIC CLOTHES"
        subTitle="Discover our unique & cute aesthetic clothes."
      />

      <Box w="full" wd={{ base: "inline", lg: "none" }}>
        <SlideShow products={products} />
      </Box>

      <Center my="5">
        <Btn>
          <Text fontWeight="medium" mr="0.5">
            view more
          </Text>
          <BsArrowRight size="23" />
        </Btn>
      </Center>

      <Banner
        main="up to 50% off cosies scarves, boots, jackets, oh my!"
        textTransform="uppercase"
        mt="5"
      />

      <SectionTitle
        withBar={false}
        title="NEW ARRIVALS DAILY"
        subTitle="Upgrade your closet with fresh aesthetic clothes."
      />

      <Box w="full" wd={{ base: "inline", lg: "none" }}>
        <SlideShow products={products} index={9} />
      </Box>

      <Center my="5">
        <Btn>
          <Text fontWeight="medium" mr="0.5">
            view more
          </Text>
          <BsArrowRight size="23" />
        </Btn>
      </Center>

      <SectionTitle
        withBar={false}
        title="what's your style?"
        subTitle="the most popular styles for 2021."
        mt="9"
      />

      <CategoryGrid
        categories={categories}
        banner1={
          <Banner
            main="Unlimited Free Next-Day Delivery for a whole year for $9.99"
            sub="Premier Delivery"
          />
        }
        banner2={
          <Banner
            main="up to 50% off cosies scarves, boots, jackets, oh my!"
            textTransform="uppercase"
            mt="5"
          />
        }
      />
    </>
  );
};

export async function getStaticProps(context) {
  const productsRes = await fetch("http://localhost:5000/api/product");
  const productsData = await productsRes.json();
  const categoryRes = await fetch("http://localhost:5000/api/categories");
  const categoriesData = await categoryRes.json();
  // console.log(data);
  return {
    props: {
      categories: categoriesData.categories,
      products: productsData.products,
    },
  };
}

export default HomePage;
