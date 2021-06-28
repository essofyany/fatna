import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import CardToast from "./CardToast";
// import src from "../../../public/assets/images/products/asset 10.jpeg";
// import src from "../../../public/assets/images/products/asset 12.jpeg";
// import src from "../../../public/assets/images/products/asset 14.jpeg";
import src from "../../../public/assets/images/products/asset 15.jpeg";

function ProductImagePlaceholder({ cardState, setCardState }) {
  return (
    <AnimatePresence>
      <Box position="relative" zIndex="hide">
        <Image src={src} alt="Picture of the author" placeholder="blur" />
        {cardState.isHearted ? (
          <CardToast
            cardState={cardState}
            setCardState={setCardState}
            w="full"
            position="absolute"
            bottom="6px"
            left="0"
          />
        ) : null}
      </Box>
    </AnimatePresence>
  );
}

export default ProductImagePlaceholder;
