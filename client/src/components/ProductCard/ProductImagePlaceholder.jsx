import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import CardToast from "./CardToast";
import ProductBadge from "./ProductBadge";
import src from "../../../public/assets/images/products/asset 15.jpeg";

function ProductImagePlaceholder({ cardState, setCardState }) {
  const badges = [
    { id: "1", value: "20% off" },
    { id: "2", value: "new" },
    { id: "3", value: "selling fast" },
  ];
  return (
    <AnimatePresence>
      <Box w="full" position="relative">
        <Image src={src} alt="Picture of the author" placeholder="blur" />
        {cardState.isHearted ? (
          <CardToast
            cardState={cardState}
            setCardState={setCardState}
            w="full"
            position="absolute"
            bottom="0"
            left="0"
          />
        ) : null}
        <ProductBadge pos="0" key={badges[0].id} badge={badges[0].value} />
        <ProductBadge pos="6" key={badges[1].id} badge={badges[1].value} />
        <ProductBadge pos="12" key={badges[2].id} badge={badges[2].value} />
      </Box>
    </AnimatePresence>
  );
}

export default ProductImagePlaceholder;
