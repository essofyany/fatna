import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setView } from "../features/viewsSlice";

function ViewIcons1({ selectedView, ...styles }) {
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
        dispatch(setView("repeat(1,1fr)"));
      }}
    >
      <Box bg={selectedView ? "black" : "gray"} w="4" h="4" />
    </Box>
  );
}

function ViewIcons2({ selectedView, ...styles }) {
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
        dispatch(setView("repeat(2,1fr)"));
      }}
    >
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
    </Box>
  );
}

function ViewIcons3({ selectedView, ...styles }) {
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
        dispatch(setView("repeat(3,1fr)"));
      }}
    >
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
      <Box bg={selectedView ? "black" : "gray"} w="2" h="4" />
    </Box>
  );
}

function ViewIcons4({ selectedView, ...styles }) {
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

export function SmallView() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Box onClick={() => setClicked(true)}>
        <ViewIcons1 selectedView={clicked} />
      </Box>
      <Box onClick={() => setClicked(false)}>
        <ViewIcons2 selectedView={!clicked} />
      </Box>
    </>
  );
}
export function MediumView() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Box onClick={() => setClicked(true)}>
        <ViewIcons2 selectedView={clicked} />
      </Box>
      <Box onClick={() => setClicked(false)}>
        <ViewIcons3 selectedView={!clicked} />
      </Box>
    </>
  );
}
export function WideView() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Box onClick={() => setClicked(true)}>
        <ViewIcons3 selectedView={clicked} />
      </Box>
      <Box onClick={() => setClicked(false)}>
        <ViewIcons4 selectedView={!clicked} />
      </Box>
    </>
  );
}
