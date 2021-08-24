import { GetServerSideProps } from "next"

import { 
  HomeApplicationArea,
  BackgroundImageAnimation,
  ContentApplication,
} from "../components/HomeAplication"

import { HomeHerosType } from "../types/HomeHerosType"
import { db } from "../services/firebase"

interface HomeProps {
  herosData : HomeHerosType[];
}

export default function Home({
  herosData
}:HomeProps) {

  return (
   <HomeApplicationArea>
     <BackgroundImageAnimation/> 
     <ContentApplication herosData={herosData} />
   </HomeApplicationArea>
  )
}

export const getServerSideProps : GetServerSideProps = async () => {

  const herosData : HomeHerosType[] = [];

  const response = await db.collection("Home_Heros_Data").get()
  response.forEach(item => herosData.push(item.data() as HomeHerosType))

  return {
    props: {
      herosData,
    }
  }
}