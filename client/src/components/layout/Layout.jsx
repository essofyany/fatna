import { Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container
        maxW={{ base: "full", md: "full", lg: "6xl", xl: "9xl" }}
        my={{ base: "12", md: "12", lg: "auto" }}
        // minH="220vh"
        pos="relative"
      >
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
