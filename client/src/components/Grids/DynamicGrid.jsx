import { Grid, useBreakpointValue } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setView } from "../../features/viewsSlice";

function DynamicGrid({ children }) {
  const dispatch = useDispatch();
  const resizedView = useBreakpointValue({
    base: "repeat(2,1fr)",
    md: "repeat(3,1fr)",
    lg: "repeat(4,1fr)",
  });
  const gridTemplate = useSelector((state) => state.views.gridTemplate);

  useEffect(() => {
    dispatch(setView(""));
  }, [resizedView]);
  return (
    <Grid w="full" gap={4} templateColumns={gridTemplate || resizedView}>
      {children}
    </Grid>
  );
}

export default DynamicGrid;
