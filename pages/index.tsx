import { GetServerSideProps } from "next"
import { BackgroundImageAnimation } from "../components/HomeAplication/BackgroundImageAnimation"
import { ContentApplication } from "../components/HomeAplication/ContentApplication"
import { HomeApplicationArea } from "../components/HomeAplication/HomeApplicationArea"
import { db } from "../services/firebase"
import { HomeHerosType } from "../types/HomeHerosType"

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