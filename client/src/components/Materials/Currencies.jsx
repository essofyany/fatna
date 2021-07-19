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

export const currencies = {
  USD: {
    name: "USD",
    selectedComponent: <USD key="USD" selected={true} />,
    currentCurrencyIcon: <USD key="USD" forProduct={true} />,
    component: <USD key="USD" />,
  },
  EUR: {
    name: "EUR",
    selectedComponent: <EUR key="EUR" selected={true} />,
    currentCurrencyIcon: <EUR key="EUR" forProduct={true} />,
    component: <EUR key="EUR" />,
  },
  YEN: {
    name: "YEN",
    selectedComponent: <YEN key="YEN" selected={true} />,
    currentCurrencyIcon: <YEN key="YEN" forProduct={true} />,
    component: <YEN key="YEN" />,
  },
  PND: {
    name: "PND",
    selectedComponent: <PND key="PND" selected={true} />,
    currentCurrencyIcon: <PND key="PND" forProduct={true} />,
    component: <PND key="PND" />,
  },
  RUP: {
    name: "RUP",
    selectedComponent: <RUP key="RUP" selected={true} />,
    currentCurrencyIcon: <RUP key="RUP" forProduct={true} />,
    component: <RUP key="RUP" />,
  },
};

export function currencySelector(currencyName) {
  switch (currencyName) {
    case "USD":
      return currencies[currencyName];
    case "EUR":
      return currencies[currencyName];
    case "YEN":
      return currencies[currencyName];
    case "PND":
      return currencies[currencyName];
    case "RUP":
      return currencies[currencyName];
    default:
      return currencies["USD"];
  }
}

export function USD({ selected, forProduct = false }) {
  const dispatch = useDispatch();
  return (
    <>
      {forProduct ? (
        <HiCurrencyDollar color="white" size="22" />
      ) : (
        <IconTap>
          <Box
            w="full"
            d="flex"
            opacity="1"
            alignItems="center"
            color={selected ? "white" : "black"}
            cursor="pointer"
            onClick={() => dispatch(changeCurrency("USD"))}
          >
            <HiCurrencyDollar size="22" />
            <Text px="1" fontWeight="medium">
              USD
            </Text>
            {selected && <IoIosArrowDown size="16" />}
          </Box>
        </IconTap>
      )}
    </>
  );
}

export function EUR({ selected, forProduct = false }) {
  const dispatch = useDispatch();
  return (
    <>
      {forProduct ? (
        <HiCurrencyEuro color="white" size="22" />
      ) : (
        <IconTap>
          <Box
            w="full"
            opacity="1"
            d="flex"
            alignItems="center"
            color={selected ? "white" : "black"}
            cursor="pointer"
            onClick={() => dispatch(changeCurrency("EUR"))}
          >
            <HiCurrencyEuro size="22" />
            <Text px="1" fontWeight="medium">
              EUR
            </Text>
            {selected && <IoIosArrowDown size="16" />}
          </Box>
        </IconTap>
      )}
    </>
  );
}

export function YEN({ selected, forProduct = false }) {
  const dispatch = useDispatch();
  return (
    <>
      {forProduct ? (
        <HiCurrencyYen color="white" size="22" />
      ) : (
        <IconTap>
          <Box
            w="full"
            opacity="1"
            d="flex"
            alignItems="center"
            color={selected ? "white" : "black"}
            cursor="pointer"
            onClick={() => dispatch(changeCurrency("YEN"))}
          >
            <HiCurrencyYen size="22" />
            <Text px="1" fontWeight="medium">
              YEN
            </Text>
            {selected && <IoIosArrowDown size="16" />}
          </Box>
        </IconTap>
      )}
    </>
  );
}

export function PND({ selected, forProduct = false }) {
  const dispatch = useDispatch();
  return (
    <>
      {forProduct ? (
        <HiCurrencyPound color="white" size="22" />
      ) : (
        <IconTap>
          <Box
            w="full"
            opacity="1"
            d="flex"
            alignItems="center"
            color={selected ? "white" : "black"}
            cursor="pointer"
            onClick={() => dispatch(changeCurrency("PND"))}
          >
            <HiCurrencyPound size="22" />
            <Text px="1" fontWeight="medium">
              PND
            </Text>
            {selected && <IoIosArrowDown size="16" />}
          </Box>
        </IconTap>
      )}
    </>
  );
}

export function RUP({ selected, forProduct = false }) {
  const dispatch = useDispatch();
  return (
    <>
      {forProduct ? (
        <HiCurrencyRupee color="white" size="22" />
      ) : (
        <IconTap>
          <Box
            w="full"
            opacity="1"
            d="flex"
            alignItems="center"
            color={selected ? "white" : "black"}
            cursor="pointer"
            onClick={() => dispatch(changeCurrency("RUP"))}
          >
            <HiCurrencyRupee size="22" />
            <Text px="1" fontWeight="medium">
              RUP
            </Text>
            {selected && <IoIosArrowDown size="16" />}
          </Box>
        </IconTap>
      )}
    </>
  );
}
