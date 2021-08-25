import { Box, Center, Flex } from "@chakra-ui/react";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { PageLimitator } from "../../components/CharacterPage/PageLimitator";
import { PageWrapper } from "../../components/HomeAplication";
import { ImageBox } from "../../components/Global/ImageBox";
import { api } from "../../services/api";
import { CharacterData } from "../../types/CharacterDataTypes"
import { PageCharacter_HeroDataFormatter } from "../../utils/PageCharacter_HeroDataFormatter";
import { SectionOfPage } from "../../components/CharacterPage/SectionOfPage";
import { db } from "../../services/firebase";
import { HomeHerosType } from "../../types/HomeHerosType";


interface CharacterPageProps {
  heroData: CharacterData
}

export const getStaticPaths : GetStaticPaths = async (ctx) => {

  const herosData : HomeHerosType[] = [];

  const response = await db.collection("Home_Heros_Data").get()
  response.forEach(item => herosData.push(item.data() as HomeHerosType))

  const paths = herosData.map(hero => {
    return {
      params: {id: hero.id}
    }
  })

  return {
    paths:[],
    fallback: "blocking"
  }
}

export default function CharacterPage ({
  heroData
} : CharacterPageProps){

  return(
    <PageWrapper overflow="hidden">
      <Flex flex="1" overflow="auto">
      <PageLimitator>
          <Flex
            bg="pink.200"
            minH="600px"
            w="100%"
            flexDir="row"
          >
            <Flex flex="3" bg="blue">

            </Flex>
            <Center flex="2">
              <ImageBox
                h="70%" w="70%"
                heroId={heroData.id}
                heroImage={heroData.thumbnail}
                heroName={heroData.name}
              />
            </Center>
          </Flex>
          <Flex flexDir="column">
            <SectionOfPage title="Comics" data={heroData.comics} />
            <SectionOfPage title="Events" data={heroData.events} />
            <SectionOfPage title="Series" data={heroData.series} />
          </Flex>
        </PageLimitator>
      </Flex>
    </PageWrapper>
  )
}

export const getStaticProps : GetStaticProps = async(ctx) => {

  const { id } = ctx.params;

  try {
    const { data } = await api.get(`characters/${id}`)

    const heroData = await PageCharacter_HeroDataFormatter(data.data.results[0]);

    return {
      props:{
        heroData
      }
    }
  }catch (err){
    return {
      notFound: true
    }
  }
}