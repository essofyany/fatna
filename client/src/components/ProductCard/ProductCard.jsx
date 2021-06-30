import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import ProductImagePlaceholder from "./ProductImagePlaceholder";
import ProductInfo from "./ProductInfo";

function ProductCard({ ...styles }) {
  // TODO: make the toast hide after a delay for both add or delete a heart
  const [cardState, setCardState] = useState({
    isHearted: false,
  });

  useEffect(() => {}, [cardState]);

  return (
    <Box pos='relative' mx="auto" px={{ md: "2", lg: "0" }}>
      <ProductImagePlaceholder
        cardState={cardState}
        setCardState={setCardState}
      />
      <ProductInfo cardState={cardState} setCardState={setCardState} />
    </Box>
  );
}

export default ProductCard;
