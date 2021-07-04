import Link from "next/link";
import { Text } from "@chakra-ui/react";
import TextTap from "../Motions/TextTap";

function NavigationList({ navList = [], ...styles }) {
  return (
    <>
      {navList.map((item) =>
        item === "collections" ? (
          <TextTap
            w="full"
            key={item}
            cursor="pointer"
            fontSize="md"
            fontWeight="medium"
            textTransform="uppercase"
            mx="2"
            {...styles}
          >
            <Link href="/collections">
              <span style={{ width: "100%" }}>{item}</span>
            </Link>
          </TextTap>
        ) : (
          <TextTap
            key={item}
            cursor="pointer"
            fontSize="md"
            fontWeight="medium"
            mx="2"
            textTransform="uppercase"
            {...styles}
          >
            {item}
          </TextTap>
        )
      )}
    </>
  );
}

export default NavigationList;
