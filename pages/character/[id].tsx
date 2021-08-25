import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { PageWrapper } from "../../components/HomeAplication";
import { CharacterData } from "../../types/CharacterDataTypes"
import { SectionOfPage } from "../../components/CharacterPage/SectionOfPage";
import { ContentArea } from "../../components/CharacterPage/ContentArea";
import { CharacterArea } from "../../components/CharacterPage/CharacterArea";
import { CharacterDescription } from "../../components/CharacterPage/CharacterDescription";
import { CharacterCard } from "../../components/CharacterPage/CharacterCard";
import { PageCharacter_HeroDataFormatter } from "../../utils/PageCharacter_HeroDataFormatter";
import { api } from "../../services/api";


interface CharacterPageProps {
  heroData: CharacterData
}

export const getStaticPaths : GetStaticPaths = async (ctx) => {

  return {
    paths: [],
    fallback: "blocking",
  }
}

export default function CharacterPage ({
  heroData
} : CharacterPageProps){

  const { 
    id, 
    name, 
    description, 
    thumbnail,
    comics,
    events,
    series 
  } = heroData

  return(
    <PageWrapper overflow="hidden">
      <ContentArea>
          <CharacterArea>
            <CharacterDescription
              name={name}
              description={description}
            />
            <CharacterCard 
              id={id}
              name={name}
              thumbnail={thumbnail}
            />
          </CharacterArea>
          <Flex flexDir="column">
            <SectionOfPage title="Comics" data={comics} />
            <SectionOfPage title="Events" data={events} />
            <SectionOfPage title="Series" data={series} />
          </Flex>
      </ContentArea>
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
      },
      revalidate: 60 * 60 * 24 * 30 //30 days
    }
  }catch (err){

    console.log(err)

    return {
      notFound: true
    }
  }
}