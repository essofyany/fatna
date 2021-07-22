import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import ProductImagePlaceholder from "./ProductImagePlaceholder";
import ProductInfo from "./ProductInfo";

function ProductCard({ product, ...styles }) {
  const { images } = product;
  // TODO: make the toast hide after a delay for both add or delete a heart
  const [cardState, setCardState] = useState({
    isHearted: false,
  });

  useEffect(() => {}, [cardState]);

  return (
    <Box mx="auto" mb="5" px={{ md: "2", lg: "0" }} {...styles}>
      <ProductImagePlaceholder
        cardState={cardState}
        setCardState={setCardState}
        images={images}
      />
      <ProductInfo
        productInfo={product}
        cardState={cardState}
        setCardState={setCardState}
      />
    </Box>
  );
}

export default ProductCard;
