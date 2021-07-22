import { Box, Image } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

function HoveredImage({ imagesObject }) {
  const [currentImage, setCurrentImage] = useState(imagesObject.fisrtImage);
  //   const [isHovered, setIsHovered] = useState(false);

  return (
    <Box overflow="hidden" w="full" h="full">
      <AnimatePresence>
        <MotionImage
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.8 },
          }}
          w="full"
          h="full"
          onMouseOver={() => setCurrentImage(imagesObject.secondImage)}
          onMouseOut={() => setCurrentImage(imagesObject.fisrtImage)}
          src={currentImage}
          alt={currentImage.alt}
          objectFit="cover"
          objectPosition="center"
        />
      </AnimatePresence>
    </Box>
  );
}

export default HoveredImage;
