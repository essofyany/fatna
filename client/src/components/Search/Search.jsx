import { useRef } from "react";
import {
  Center,
  SlideFade,
  useDisclosure,
  useOutsideClick,
} from "@chakra-ui/react";
import disableScroll from "disable-scroll";
import SearchIcon from "./SearchIcon";
import SearchModal from "./SearchModal";

function Search({ size = "22" }) {
  const modalRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useOutsideClick({
    ref: modalRef,
    handler: () => {
      onClose();
      disableScroll.off();
    },
  });
  return (
    <>
      {/* search Icon */}
      <SearchIcon
        size={size}
        handleOpen={() => {
          onOpen();
          disableScroll.on();
        }}
      />
      {/* search Modal */}
      <Center
        position="absolute"
        d={isOpen ? "initial" : "none"}
        top={{ base: "-88vh", lg: "-20" }}
        right={{ base: "auto", lg: "-5" }}
        w="100vw"
        h="102vh"
        bg="blackAlpha.500"
        zIndex="modal"
      >
        <SlideFade in={isOpen} offsetY="100px">
          <SearchModal
            modalRef={modalRef}
            handleClose={() => {
              onClose();
              disableScroll.off();
            }}
          />
        </SlideFade>
      </Center>
    </>
  );
}

export default Search;
