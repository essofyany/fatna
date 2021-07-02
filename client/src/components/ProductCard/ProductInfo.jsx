import { Box, Text } from "@chakra-ui/react";
import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";
import IconTap from "../Motions/IconTap";

function ProductInfo({ setCardState, cardState }) {
  function handleHeart() {
    setCardState({ ...cardState, isHearted: !cardState.isHearted });
  }

  return (
    <Box w="full" d="flex" flexDir="column">
      <Box d="flex" alignItems="center" justifyContent="space-between">
        <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
          63$
        </Text>
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
