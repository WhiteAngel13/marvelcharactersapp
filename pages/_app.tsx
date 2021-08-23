import { ChakraProvider } from "@chakra-ui/react"
import { GetServerSideProps } from "next";
import { db } from "../services/firebase";
import { HomeHerosType } from "../types/HomeHerosType";
import { GroupsNameFormatter } from "../utils/GroupsNameFormatter";
import { NameFormatter } from "../utils/NameFormatter";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp