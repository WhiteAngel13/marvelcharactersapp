import { Center, Spinner, Text } from "@chakra-ui/react";
import { PageWrapper } from "../HomeAplication";
import { ContentArea } from "./ContentArea";


export function LoadingData(){

  return(
    <PageWrapper overflow="hidden">
      <ContentArea>
          <Center h="100vh" w="100%" flexDir="column">

            <Text
              color="#CCC"
              fontSize="5xl"
              fontWeight="black"
              textAlign="center"
              mb="60px"
            >
              Dados do Herói Carregando, <br/> Por Favor, aguarde
            </Text>

            <Spinner
              size="xl"
              color="#ccc"
              w="10%" h="10%"
            />
          </Center>
      </ContentArea>
    </PageWrapper>
  )
}