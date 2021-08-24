import { Flex, } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { Slider } from "./Slider";
import { MainContent } from "./MainContent";
import { HomeHerosType } from "../../types/HomeHerosType";
import { HomeApplicationProvider } from "../../hooks/HomeApplication";
import { SliderProvider } from "../../hooks/HomeApplication/SliderController";

interface ContentApplicationProps {
  herosData: HomeHerosType[]
}

export function ContentApplication({ herosData } : ContentApplicationProps){

  return(
    <Flex
      position="absolute"
      top="0"
      right="0"
      left="0"
      bottom="0"
    >
     <HomeApplicationProvider herosData={herosData}>
      <SliderProvider>
        <Sidebar />
        <Slider />
        <MainContent />
      </SliderProvider>
     </HomeApplicationProvider>
    </Flex>    
  )
}