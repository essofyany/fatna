import { Box, Center, Text } from "@chakra-ui/react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

function ProductReview() {
  return (
    <Center>
      <Stars rate="3.5" />
      <Text pl="1"> (34)</Text>
    </Center>
  );
}

function Stars({ rate }) {
  const rateNum = Number(rate);
  const arr = [, , , ,];
  console.log(rateNum);
  return (
    <Box d="flex">
      <BsStarFill size="14" key="1" />
      <BsStarFill size="14" key="2" />
      <BsStarFill size="14" key="3" />
      <BsStarFill size="14" key="4" />
      <BsStarHalf size="14" key="5" />
    </Box>
  );
}

function calcul(num) {
  return num - Math.floor(num) > 0 ? 1 : 0.5;
}

export default ProductReview;
