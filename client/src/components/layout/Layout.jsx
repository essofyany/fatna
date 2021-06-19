import { Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Container my="10" minH="120vh" bg="green.400">
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
