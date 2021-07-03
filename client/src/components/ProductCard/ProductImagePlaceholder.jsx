import Image from "next/image";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import CardToast from "./CardToast";
import ProductBadge from "./ProductBadge";
import src from "../../../public/assets/images/products/asset 15.jpeg";

function ProductImagePlaceholder({ cardState, setCardState }) {
  const sizes = useBreakpointValue({ base: "4", md: "5", lg: "6" });
  const badges = [
    { id: "1", value: "20% off" },
    { id: "2", value: "new" },
    { id: "3", value: "selling fast" },
  ];
  return (
    <AnimatePresence>
      <Box position="relative">
        <Image
          src={src}
          alt="Picture of the author"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          layout="responsive"
        />
        {/* toast */}
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
        {/* badges */}
        <>
          <ProductBadge
            pos={sizes - sizes}
            key={badges[0].id}
            badge={badges[0].value}
          />
          <ProductBadge
            pos={sizes}
            key={badges[1].id}
            badge={badges[1].value}
          />
          <ProductBadge
            pos={Number(sizes) + Number(sizes)}
            key={badges[2].id}
            badge={badges[2].value}
          />
        </>
      </Box>
    </AnimatePresence>
  );
}

export default ProductImagePlaceholder;
