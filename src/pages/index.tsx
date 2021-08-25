import { GetStaticProps } from "next"

import { 
  HomeApplication
} from "../components/HomeAplication"

import { HomeHerosType } from "../types/HomeHerosType"
import { db } from "../services/firebase"
import { PageWrapper } from "../components/Global/PageWrapper"

interface HomeProps {
  herosData : HomeHerosType[];
}

export default function Home({
  herosData
}:HomeProps) {

  return (
   <PageWrapper overflow="hidden"> 
     <HomeApplication herosData={herosData} />
   </PageWrapper>
  )
}

export const getStaticProps : GetStaticProps = async () => {

  const herosData : HomeHerosType[] = [];

  const response = await db.collection("Home_Heros_Data").get()
  response.forEach(item => herosData.push(item.data() as HomeHerosType))

  return {
    props: {
      herosData,
    },
    revalidate: 60 * 60 * 24 * 30 //30 days
  }
}