import { useDispatch } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import IconTap from "../Motions/IconTap";
import {
  HiCurrencyDollar,
  HiCurrencyEuro,
  HiCurrencyPound,
  HiCurrencyRupee,
  HiCurrencyYen,
} from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { changeCurrency } from "../../features/currencySlice";

export const currencies = [
  {
    name: "USD",
    selectedComponent: <USD key="USD" selected={true} />,
    component: <USD key="USD" />,
  },
  {
    name: "EUR",
    selectedComponent: <EUR key="EUR" selected={true} />,
    component: <EUR key="EUR" />,
  },
  {
    name: "YEN",
    selectedComponent: <YEN key="YEN" selected={true} />,
    component: <YEN key="YEN" />,
  },
  {
    name: "PND",
    selectedComponent: <PND key="PND" selected={true} />,
    component: <PND key="PND" />,
  },
  {
    name: "RUP",
    selectedComponent: <RUP key="RUP" selected={true} />,
    component: <RUP key="RUP" />,
  },
];

export function USD({ selected }) {
  const dispatch = useDispatch();
  return (
    <IconTap>
      <Box
        w="full"
        d="flex"
        opacity="1"
        alignItems="center"
        color={selected ? "white" : "black"}
        cursor="pointer"
        onClick={() => dispatch(changeCurrency(currencies[0]))}
      >
        <HiCurrencyDollar size="22" />
        <Text px="1" fontWeight="medium">
          USD
        </Text>
        {selected && <IoIosArrowDown size="16" />}
      </Box>
    </IconTap>
  );
}

export function EUR({ selected }) {
  const dispatch = useDispatch();
  return (
    <IconTap>
      <Box
        w="full"
        opacity="1"
        d="flex"
        alignItems="center"
        color={selected ? "white" : "black"}
        cursor="pointer"
        onClick={() => dispatch(changeCurrency(currencies[1]))}
      >
        <HiCurrencyEuro size="22" />
        <Text px="1" fontWeight="medium">
          EUR
        </Text>
        {selected && <IoIosArrowDown size="16" />}
      </Box>
    </IconTap>
  );
}
export function YEN({ selected }) {
  const dispatch = useDispatch();
  return (
    <IconTap>
      <Box
        w="full"
        opacity="1"
        d="flex"
        alignItems="center"
        color={selected ? "white" : "black"}
        cursor="pointer"
        onClick={() => dispatch(changeCurrency(currencies[2]))}
      >
        <HiCurrencyYen size="22" />
        <Text px="1" fontWeight="medium">
          YEN
        </Text>
        {selected && <IoIosArrowDown size="16" />}
      </Box>
    </IconTap>
  );
}
export function PND({ selected }) {
  const dispatch = useDispatch();
  return (
    <IconTap>
      <Box
        w="full"
        opacity="1"
        d="flex"
        alignItems="center"
        color={selected ? "white" : "black"}
        cursor="pointer"
        onClick={() => dispatch(changeCurrency(currencies[3]))}
      >
        <HiCurrencyPound size="22" />
        <Text px="1" fontWeight="medium">
          PND
        </Text>
        {selected && <IoIosArrowDown size="16" />}
      </Box>
    </IconTap>
  );
}
export function RUP({ selected }) {
  const dispatch = useDispatch();
  return (
    <IconTap>
      <Box
        w="full"
        opacity="1"
        d="flex"
        alignItems="center"
        color={selected ? "white" : "black"}
        cursor="pointer"
        onClick={() => dispatch(changeCurrency(currencies[4]))}
      >
        <HiCurrencyRupee size="22" />
        <Text px="1" fontWeight="medium">
          RUP
        </Text>
        {selected && <IoIosArrowDown size="16" />}
      </Box>
    </IconTap>
  );
}
