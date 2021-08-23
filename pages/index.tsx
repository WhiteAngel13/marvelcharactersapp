import { GetServerSideProps } from "next"
import { BackgroundImageAnimation } from "../components/HomeAplication/BackgroundImageAnimation"
import { ContentApplication } from "../components/HomeAplication/ContentApplication"
import { HomeApplicationArea } from "../components/HomeAplication/HomeApplicationArea"
import { Sidebar } from "../components/HomeAplication/Sidebar"
import { MainContent } from "../components/HomeAplication/MainContent"
import { Slider } from "../components/HomeAplication/Slider"
import { db } from "../services/firebase"
import { HomeHerosType } from "../types/HomeHerosType"
import { NameFormatter } from "../utils/NameFormatter"
import { useState } from "react"
import { Button } from "@chakra-ui/react"
import { GroupsNameFormatter } from "../utils/GroupsNameFormatter"

interface HomeProps {
  herosData : HomeHerosType[];
  groupsFormatted: string[];
}

export default function Home({
  herosData,
  groupsFormatted
}:HomeProps) {

  const [groupToShow, setGroupShow] = useState("spider-man")

  const herosDataFormatted = herosData.filter(hero => hero.group === groupToShow)

  function handleSetGroup( group : string){
    setGroupShow(group)
  }

  return (
   <HomeApplicationArea>
     <Button bg="red" width="20px" h="20px" zIndex="10" onClick={()=>{setGroupShow("avengers")}} />
     <BackgroundImageAnimation/> 
     <ContentApplication>
       <Sidebar herosGroups={groupsFormatted} setGroup={handleSetGroup} />
       <MainContent/>
       <Slider herosData={herosDataFormatted} />
     </ContentApplication>
   </HomeApplicationArea>
  )
}

export const getServerSideProps : GetServerSideProps = async () => {

  const herosData : HomeHerosType[] = [];
  const allgroupsUnfformated = []

  const response = await db.collection("Home_Heros_Data").get()
  response.forEach(item => {
    const hero = item.data() as HomeHerosType;
    
    if(hero.name.length > 11){
      hero.nameFormatted = NameFormatter(hero.name);
    }

    allgroupsUnfformated.push(hero.group)
    herosData.push(hero)

  });

  const groupsFormatted = GroupsNameFormatter(allgroupsUnfformated)


  return {
    props: {
      herosData,
      groupsFormatted
    }
  }
}