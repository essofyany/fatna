import {
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { USD, EUR, YEN, PND, RUP } from "./Currencies";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function CurrencyMenuAccordion() {
  const currentCurrency = useSelector((state) => state.currency.current);
  const currencies = useSelector((state) => state.currency.currencyList);

  useEffect(() => {}, [currentCurrency.name]);

  return (
    <Accordion allowMultiple>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton justifyContent="space-between">
                {currentCurrency.component}
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack alignItems="start" spacing="2">
                {currencies.map((item) => {
                  return item.component;
                })}
              </VStack>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

export default CurrencyMenuAccordion;
