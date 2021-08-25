import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { PageCharacter_HeroDataFormatter } from "../../utils/PageCharacter_HeroDataFormatter";
import { api } from "../../services/api";


import { Flex } from "@chakra-ui/react";
import { PageWrapper } from "../../components/Global/PageWrapper";
import { CharacterData } from "../../types/CharacterDataTypes"
import { SectionOfPage } from "../../components/CharacterPage/SectionOfPage";
import { ContentArea } from "../../components/CharacterPage/ContentArea";
import { CharacterArea } from "../../components/CharacterPage/CharacterArea";
import { LoadingData } from "../../components/CharacterPage/LoadingData";
import { db } from "../../services/firebase";
import { HomeHerosType } from "../../types/HomeHerosType";


interface CharacterPageProps {
  heroData: CharacterData
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const response = await db.collection("Home_Heros_Data").get()
  const herosData : HomeHerosType[] = []

  response.forEach(item => herosData.push(item.data() as HomeHerosType));

  const paths = herosData.map(hero => {
    return {params: {id : String(hero.id)}}
  })

  return {
    paths,
    fallback: true,
  }
}

export default function CharacterPage({
  heroData
}: CharacterPageProps) {

  const Router = useRouter()

  if (Router.isFallback) {
    return (
      <LoadingData />
    )
  }

  const {
    id,
    name,
    description,
    thumbnail,
    comics,
    events,
    series
  } = heroData

  return (
    <PageWrapper overflow="hidden">
      <ContentArea>
        <CharacterArea 
          id={id}
          description={description}
          name={name}
          thumbnail={thumbnail}
        />
        <Flex flexDir="column">
          <SectionOfPage title="Comics" data={comics} />
          <SectionOfPage title="Events" data={events} />
          <SectionOfPage title="Series" data={series} />
        </Flex>
      </ContentArea>
    </PageWrapper>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {

  const { id } = ctx.params;

  try {
    const { data } = await api.get(`characters/${id}`)

    const heroData = await PageCharacter_HeroDataFormatter(data.data.results[0]);

    return {
      props: {
        heroData
      },
      revalidate: 60 * 60 * 24 * 30 //30 days
    }
  } catch (err) {

    console.log(err)

    return {
      notFound: true
    }
  }
}