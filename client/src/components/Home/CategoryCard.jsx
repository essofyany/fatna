// import Image from "next/image";
import Link from "next/link";
import { Box, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);

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
      >
        <Image
          src={imageUrl}
          w="full"
          h="full"
          objectFit="cover"
          objectPosition="center"
          alt={categoryName}
          // layout="fill"
          // placeholder="blur"
        />

        <MotionText
          fontSize={{ base: "lg", sm: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="black"
          border="1.5px solid white"
          position="absolute"
          p="1"
          color="white"
          textTransform="uppercase"
          whileHover={{ scale: 1.15, derution: 3000 }}
          {...styles}
        >
          {categoryName}
        </MotionText>
      </Box>
    </Link>
  );
}

export default CategoryCard;
