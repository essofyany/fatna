import { Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container
        maxW={{ base: "full", md: "full", lg: "4xl", xl: "7xl" }}
        bg="blanchedalmond"
        my={{ base: "12", md: "12", lg: "auto" }}
        minH="120vh"
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
