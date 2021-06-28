import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import ProductImagePlaceholder from "./ProductImagePlaceholder";
import ProductInfo from "./ProductInfo";

function ProductCard() {
  // TODO: make the toast hide after a delay for both add or delete a heart
  const [cardState, setCardState] = useState({
    isHearted: false,
  });

  useEffect(() => {}, [cardState]);

  return (
    <Box p="1.5" w={{ base: "165px", sm: "170px", md: "190px", lg: "270px" }}>
      <ProductImagePlaceholder
        cardState={cardState}
        setCardState={setCardState}
      />
      <ProductInfo cardState={cardState} setCardState={setCardState} />
    </Box>
  );
}

export default ProductCard;
