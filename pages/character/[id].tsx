import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { PageWrapper } from "../../components/HomeAplication";
import { api } from "../../services/api";

export default function CharacterPage ({id}){
  return(
    <PageWrapper>
      <Box bg="white" zIndex="10" position="absolute">
        <h1>AAAAAAAAAAA {id}</h1>
      </Box>
    </PageWrapper>
  )
}

export const getServerSideProps : GetServerSideProps = async(ctx) => {

  const { id } = ctx.params;

  return {
    props:{id}
  }
}