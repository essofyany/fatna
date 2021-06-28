import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../store";
import Layout from "../components/Layout/Layout";
import theme from "../theme";
import "@fontsource/quicksand/300.css";
import "@fontsource/quicksand/400.css";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/quicksand/700.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
