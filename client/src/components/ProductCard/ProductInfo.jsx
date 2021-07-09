import { Box, Text } from "@chakra-ui/react";
import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import IconTap from "../Motions/IconTap";

function ProductInfo({ setCardState, cardState }) {
  const { currentCurrencyIcon } = useSelector(
    (state) => state.currency.current
  );
  // console.log(currentCurrencyIcon);
  function handleHeart() {
    setCardState({ ...cardState, isHearted: !cardState.isHearted });
  }

  return (
    <Box w="full" d="flex" flexDir="column">
      <Box d="flex" alignItems="center" justifyContent="space-between">
        <Box d="flex" alignItems="center">
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
            63
          </Text>
          <Box
            bg="black"
            w="19px"
            h="19px"
            justifyContent="center"
            alignItems="center"
            borderRadius="full"
            mx='1'
          >
            {currentCurrencyIcon}
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
        VSCO AESTHETIC SKINNY HIGH WAIST PANTS
      </Text>
    </Box>
  );
}

export default ProductInfo;
