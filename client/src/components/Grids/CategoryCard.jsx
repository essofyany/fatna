// import Image from "next/image";
import Link from "next/link";
import { Box, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);
const MotionImage = motion(Image);

function CategoryCard({ category, ...styles }) {
  const { id, categoryName, imageUrl, itemsCount } = category;
  return (
    <Link href={`/collections/${categoryName}`}>
      <Box
        w="full"
        h="full"
        d="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        overflow="hidden"
      >
        <MotionImage
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.7 },
          }}
          src={imageUrl}
          w="full"
          h="full"
          objectFit="cover"
          objectPosition="center"
          alt={categoryName}
        />

        <MotionText
          fontSize={{ base: "lg", sm: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="black"
          border="1.5px solid white"
          position="absolute"
          p="1"
          color="white"
          textTransform="uppercase"
          // whileHover={{ scale: 1.15, derution: 3000 }}
          {...styles}
        >
          {categoryName}
        </MotionText>
      </Box>
    </Link>
  );
}

export default CategoryCard;
