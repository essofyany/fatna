// import Image from "next/image";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import CardToast from "./CardToast";
import ProductBadge from "./ProductBadge";
import src from "../../../public/assets/images/products/asset 15.jpeg";
import HoveredImage from "../Materials/HoveredImage";

import { motion } from "framer-motion";

const MotionImage = motion(Image);

function ProductImagePlaceholder({ images, cardState, setCardState }) {
  const sizes = useBreakpointValue({ base: "4", md: "5", lg: "6" });
  const badges = [
    { id: "1", value: "20% off" },
    { id: "2", value: "new" },
    { id: "3", value: "selling fast" },
  ];

  return (
    <AnimatePresence>
      <Box position="relative" overflow="hidden">
        <Box overflow="hidden" w="full" h="full">
          <AnimatePresence>
            <MotionImage
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.7 },
              }}
              w="full"
              h="full"
              src={images[1].url}
              alt="sdfsdf "
              objectFit="cover"
              objectPosition="center"
            />
          </AnimatePresence>
        </Box>
        {/* <Image
          src={images[0].url}
          width="full"
          height="full"
          alt="Picture of the author"
          objectFit="cover"
          objectPosition="center"
          // placeholder="blur"
          layout="responsive"
        /> */}
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
