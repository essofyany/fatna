import { Container, Box, Center } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import SubFooter from "./SubFooter";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container
        maxW={{ base: "full", md: "full", lg: "9xl", xl: "100%" }}
        mt={{ base: "28", md: "28", lg: "auto" }}
        pos="relative"
      >
        {children}
      </Container>
      <SubFooter />
      <Footer />
    </>
  );
}

export default Layout;
