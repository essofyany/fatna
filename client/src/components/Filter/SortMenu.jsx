import { useEffect, useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { BiFilter } from "react-icons/bi";
import TextTap from "../Motions/TextTap";
import { changeSort } from "../../features/sortSlice";

const MotionVStack = motion(VStack);

const sortList = {
  featured: {
    name: "Featured",
    selectedComponent: (
      <Text ml="2" fontSize="lg" fontWeight="medium">
        Featured
      </Text>
    ),
    component: (
      <TextTap _hover={{ color: "black", fontWeight: "medium" }}>
        Featured
      </TextTap>
    ),
  },
  best: {
    name: "Best selling",
    selectedComponent: (
      <Text ml="2" fontSize="lg" fontWeight="medium">
        Best selling
      </Text>
    ),
    component: (
      <TextTap _hover={{ color: "black", fontWeight: "medium" }}>
        Best selling
      </TextTap>
    ),
  },
  alphabetically: {
    name: "Alphabetically",
    selectedComponent: (
      <Text ml="2" fontSize="lg" fontWeight="medium">
        Alphabetically
      </Text>
    ),
    component: (
      <TextTap _hover={{ color: "black", fontWeight: "medium" }}>
        Alphabetically
      </TextTap>
    ),
  },
  priceUp: {
    name: "Price Up",
    selectedComponent: (
      <Text ml="2" fontSize="lg" fontWeight="medium">
        Price: high to low
      </Text>
    ),
    component: (
      <TextTap _hover={{ color: "black", fontWeight: "medium" }}>
        Price: high to low
      </TextTap>
    ),
  },
  priceDown: {
    name: "Price Down",
    selectedComponent: (
      <Text ml="2" fontSize="lg" fontWeight="medium">
        Price: low to high
      </Text>
    ),
    component: (
      <TextTap _hover={{ color: "black", fontWeight: "medium" }}>
        Price: low to high
      </TextTap>
    ),
  },
  dateUp: {
    name: "Date Up",
    selectedComponent: (
      <Text ml="2" fontSize="lg" fontWeight="medium">
        Date: new to old
      </Text>
    ),
    component: (
      <TextTap _hover={{ color: "black", fontWeight: "medium" }}>
        Date: new to old
      </TextTap>
    ),
  },
  dateDown: {
    name: "Date Down",
    selectedComponent: (
      <Text ml="2" fontSize="lg" fontWeight="medium">
        Date: old to new
      </Text>
    ),
    component: (
      <TextTap _hover={{ color: "black", fontWeight: "medium" }}>
        Date: old to new
      </TextTap>
    ),
  },
};

function sortSwitch(sortBy) {
  switch (sortBy) {
    case "featured":
      return sortList[sortBy];
    case "best":
      return sortList[sortBy];
    case "alphabetically":
      return sortList[sortBy];
    case "priceUp":
      return sortList[sortBy];
    case "priceDown":
      return sortList[sortBy];
    case "dateDown":
      return sortList[sortBy];
    case "dateUp":
      return sortList[sortBy];
    default:
      return sortList["featured"];
  }
}

function SortMenu() {
  const dispatch = useDispatch();
  const currentSort = useSelector((state) => state.sortMenu.current);

  const [isExpanded, setIsExpanded] = useState(false);
  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  useEffect(() => {}, [currentSort]);

  return (
    <>
      {/* current currency */}
      <Box
        d="flex"
        alignItems="center"
        justifyContent="flex-end"
        w="full"
        p="3"
        onClick={handleClick}
      >
        <BiFilter size="24" />
        <Box display={{ base: "none", sm: "initial" }}>
          {sortSwitch(currentSort).selectedComponent}
        </Box>
      </Box>
      {/* currency menu */}
      <Box pos="relative">
        <AnimatePresence>
          {isExpanded && (
            <MotionVStack
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { durration: 0.2 } }}
              exit={{ y: 10, opacity: 0, transition: { durration: 0.2 } }}
              pos="absolute"
              right="0"
              top="4"
              color="#333"
              zIndex="modal"
              borderRadius="sm"
              border="0.5px solid #ddd"
              bg="#fff"
              opacity="0.95"
              boxShadow="lg"
              py="3"
              px="3"
              w="40"
              alignItems="left"
            >
              <TextTap
                onClick={() => {
                  dispatch(changeSort("featured"));
                  handleClick();
                }}
                _hover={{ color: "black", fontWeight: "medium" }}
              >
                Featured
              </TextTap>
              <TextTap
                onClick={() => {
                  dispatch(changeSort("best"));
                  handleClick();
                }}
                _hover={{ color: "black", fontWeight: "medium" }}
              >
                Best selling
              </TextTap>
              <TextTap
                onClick={() => {
                  dispatch(changeSort("alphabetically"));
                  handleClick();
                }}
                _hover={{ color: "black", fontWeight: "medium" }}
              >
                Alphabetically
              </TextTap>
              <TextTap
                onClick={() => {
                  dispatch(changeSort("priceDown"));
                  handleClick();
                }}
                _hover={{ color: "black", fontWeight: "medium" }}
              >
                Price: low to high
              </TextTap>
              <TextTap
                onClick={() => {
                  dispatch(changeSort("priceUp"));
                  handleClick();
                }}
                _hover={{ color: "black", fontWeight: "medium" }}
              >
                Price: high to low
              </TextTap>
              <TextTap
                onClick={() => {
                  dispatch(changeSort("dateUp"));
                  handleClick();
                }}
                _hover={{ color: "black", fontWeight: "medium" }}
              >
                Date: new to old
              </TextTap>
              <TextTap
                onClick={() => {
                  dispatch(changeSort("dateDown"));
                  handleClick();
                }}
                _hover={{ color: "black", fontWeight: "medium" }}
              >
                Date: old to new
              </TextTap>
            </MotionVStack>
          )}
        </AnimatePresence>
      </Box>
    </>
  );
}

export default SortMenu;
