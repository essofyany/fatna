import { useState } from "react";
import { Box, VStack, Text } from "@chakra-ui/react";
import Slider from "rc-slider";
import Btn from "./Btn";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

function PriceSliderFilter({ withBtn = true }) {
  const [range, setRange] = useState([20, 120]);
  return (
    <VStack w="full" spacing="2" alignItems="start">
      <Text
        fontWeight="semibold"
        textTransform="capitalize"
        pr="2"
        borderBottom="2px solid black"
        mb="3"
      >
        by price
      </Text>
      <Box w="full">
        <Range
          handleStyle={[{ backgroundColor: "white", borderColor: "black" }]}
          trackStyle={[{ backgroundColor: "black" }]}
          min={0}
          max={250}
          defaultValue={[20, 120]}
          tipFormatter={(value) => `${value}$`}
          onAfterChange={(value) => setRange(value)}
        />
        <Box w="full" mt="3" d="flex" justifyContent="space-between">
          <Text fontSize="lg" fontWeight="medium">
            {range[0]}$
          </Text>
          <Text fontSize="lg" fontWeight="medium">
            {range[1]}$
          </Text>
        </Box>
      </Box>
      {withBtn && (
        <Btn size="sm" w="full" mt="2" fontSize="sm" py="0">
          Filter
        </Btn>
      )}
    </VStack>
  );
}

export default PriceSliderFilter;
