import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { USD, EUR, YEN, PND, RUP, currencySelector } from "./Currencies";

function CurrencyMenuAccordion() {
  const currentCurrency = useSelector((state) => state.currency.current);

  useEffect(() => {}, [currentCurrency]);

  return (
    <Accordion allowMultiple>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton justifyContent="space-between">
                {currencySelector(currentCurrency).component}
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack alignItems="start" spacing="2">
                <USD />
                <EUR />
                <YEN />
                <PND />
                <RUP />
              </VStack>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

export default CurrencyMenuAccordion;
