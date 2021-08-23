import { ChakraProvider } from "@chakra-ui/react"
import { SliderProvider } from "../hooks/useSlider"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
