import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setView, switchView } from "../features/viewsSlice";

export function ViewIcons1({ selectedView, ...styles }) {
  const dispatch = useDispatch();
  return (
    <Box
      cursor="pointer"
      d="flex"
      alignItems="center"
      justifyContent="center"
      w="5"
      h="5"
      border={`1px solid ${selectedView ? "black" : "gray"}`}
      {...styles}
      onClick={() => {
        dispatch(switchView("base"));
        dispatch(setView("repeat(1,1fr)"));
      }}
    >
      <Box bg={selectedView ? "black" : "gray"} w="4" h="4" />
    </Box>
  );
}

export function ViewIcons2({ selectedView, ...styles }) {
  const dispatch = useDispatch();
  return (
    <Box
      cursor="pointer"
      d="flex"
      alignItems="center"
      justifyContent="space-evenly"
      w="6"
      h="5"
      border={`1px solid ${selectedView ? "black" : "gray"}`}
      {...styles}
      onClick={() => {
        dispatch(switchView("base"));
        dispatch(switchView("md"));
        dispatch(setView("repeat(2,1fr)"));
      }}
    >
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
    </Box>
  );
}

export function ViewIcons3({ selectedView, ...styles }) {
  const dispatch = useDispatch();
  return (
    <Box
      cursor="pointer"
      d="flex"
      alignItems="center"
      justifyContent="space-evenly"
      w="9"
      h="5"
      border={`1px solid ${selectedView ? "black" : "gray"}`}
      {...styles}
      onClick={() => {
        dispatch(switchView("md"));
        dispatch(switchView("lg"));
        dispatch(setView("repeat(3,1fr)"));
      }}
    >
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
    </Box>
  );
}

export function ViewIcons4({ selectedView, ...styles }) {
  const dispatch = useDispatch();
  return (
    <Box
      cursor="pointer"
      d="flex"
      alignItems="center"
      justifyContent="space-evenly"
      w="12"
      h="5"
      border={`1px solid ${selectedView ? "black" : "gray"}`}
      {...styles}
      onClick={() => {
        dispatch(switchView("lg"));
        dispatch(setView("repeat(4,1fr)"));
      }}
    >
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
    </Box>
  );
}
