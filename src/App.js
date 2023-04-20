import "./App.css";
import Post from "./components/post";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    twitter: {
      500: "#1DA1F2",
      600: "#1A91DA",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        textTransform: "uppercase",
        borderRadius: "full",
      },
      sizes: {
        sm: {
          fontSize: "sm",
          px: 4,
          py: 2,
        },
      },
      variants: {
        solid: {
          bg: "twitter.500",
          color: "white",
          _hover: {
            bg: "twitter.600",
          },
          _active: {
            bg: "twitter.600",
          },
          _disabled: {
            opacity: 0.5,
            cursor: "not-allowed",
            bg: "twitter.500",
          },
        },
      },
    },
  },
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="#E5E5E5" py={8}>
        <Box maxW="600px" mx="auto">
          <Post />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
