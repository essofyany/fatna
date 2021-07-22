import { Box, Text } from "@chakra-ui/react";
import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import IconTap from "../Motions/IconTap";
import { currencySelector } from "../Materials/Currencies";

function ProductInfo({ productInfo, setCardState, cardState }) {
  const { price, name } = productInfo;
  const currentCurrency = useSelector((state) => state.currency.current);
  function handleHeart() {
    setCardState({ ...cardState, isHearted: !cardState.isHearted });
  }

  return (
    <Box w="full" d="flex" flexDir="column">
      <Box d="flex" alignItems="center" justifyContent="space-between">
        <Box d="flex" alignItems="center">
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
            {price}
          </Text>
          <Box
            bg="black"
            w="19px"
            h="19px"
            justifyContent="center"
            alignItems="center"
            borderRadius="full"
            mx="1"
          >
            {currencySelector(currentCurrency).currentCurrencyIcon}
          </Box>
        </Box>
        <IconTap onClick={handleHeart}>
          {cardState.isHearted ? (
            <RiHeart2Fill size="22" />
          ) : (
            <RiHeart2Line size="22" />
          )}
        </IconTap>
      </Box>
      <Text
        fontSize={{ base: "sm", md: "md" }}
        textTransform="lowerCase"
        fontWeight="semibold"
      >
        {name}
      </Text>
    </Box>
  );
}

export default ProductInfo;
