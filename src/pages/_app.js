import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/theme'
import "prismjs/themes/prism-tomorrow.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
