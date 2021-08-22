import { GetServerSideProps } from "next"
import { BackgroundImageAnimation } from "../components/HomeAplication/BackgroundImageAnimation"
import { ContentApplication } from "../components/HomeAplication/ContentApplication"
import { HomeApplicationArea } from "../components/HomeAplication/HomeApplicationArea"
import { Sidebar } from "../components/HomeAplication/Sidebar"
import { MainContent } from "../components/HomeAplication/MainContent"
import { Slider } from "../components/HomeAplication/MainContent/Slider"
import { api } from "../services/api"


export default function Home({data}) {

  return (
   <HomeApplicationArea>
     <BackgroundImageAnimation/>
     <ContentApplication>
       <Sidebar/>
       <MainContent/>
       <Slider/>
     </ContentApplication>
   </HomeApplicationArea>
  )
}

export const getServerSideProps : GetServerSideProps = async(ctx) => {

  const { data } = await api.get("characters")

  console.log(data)
  
  return{
    props:{data}
  }
}
