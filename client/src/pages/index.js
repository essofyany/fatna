import { Box, Center, Text, Heading } from "@chakra-ui/react";
import SectionTitle from "../components/Home/SectionTitle";
import SlideShow from "../components/Home/SlideShow";
import Btn from "../components/Materials/Btn";
import { BsArrowRight } from "react-icons/bs";
import { RiUserStarFill } from "react-icons/ri";

const HomePage = () => {
  return (
    <>
      <Center
        mt={{ base: "20", lg: "5" }}
        textAlign="center"
        bg="black"
        color="white"
        w="full"
        px="12"
        py="7"
        flexDir="column"
      >
        <Box d="flex" alignItems="center">
          <RiUserStarFill />
          <Text
            mx="1"
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            fontWeight="medium"
          >
            Premier Delivery
          </Text>
        </Box>
        <Heading
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontWeight="semibold"
        >
          Unlimited Free Next-Day Delivery for a whole year for $9.99
        </Heading>
        {/* <Text></Text> */}
      </Center>

      <SectionTitle
        title="BEST SELLER AESTHETIC CLOTHES"
        subTitle="Discover our unique & cute aesthetic clothes."
      />

      <Box w="full" wd={{ base: "inline", lg: "none" }}>
        <SlideShow />
      </Box>
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
