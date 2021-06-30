import { Box, Center, Text } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import SectionTitle from "../components/Home/SectionTitle";
import SlideShow from "../components/Home/SlideShow";
import Btn from "../components/Materials/Btn";
import Banner from "../components/Home/Banner";

const HomePage = () => {
  return (
    <>
      <Banner
        main="Unlimited Free Next-Day Delivery for a whole year for $9.99"
        sub="Premier Delivery"
      />
      <Banner
        main="up to 50% off cosies scarves, boots, jackets, oh my!"
        textTransform="uppercase"
        mt='5'
      />
      <SectionTitle
        title="BEST SELLER AESTHETIC CLOTHES"
        subTitle="Discover our unique & cute aesthetic clothes."
      />

      <Box w="full" wd={{ base: "inline", lg: "none" }}>
        <SlideShow />
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
        title="NEW ARRIVALS DAILY"
        subTitle="Upgrade your closet with fresh aesthetic clothes."
      />
    </>
  );
};

export default HomePage;
