import { Flex } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { Slider } from "./Slider";
import { MainContent } from "./MainContent";

import { HomeApplicationProvider } from "../../hooks/HomeApplication";
import { SliderProvider } from "../../hooks/HomeApplication/SliderController";

import { HomeHerosType } from "../../types/HomeHerosType";

interface ContentApplicationProps {
  herosData: HomeHerosType[]
}

export function HomeApplication({ herosData } : ContentApplicationProps){

  return(
    <HomeApplicationProvider herosData={herosData}>
      <SliderProvider>
        <Sidebar />
        <Slider />
        <MainContent />
      </SliderProvider>
    </HomeApplicationProvider>
  )
}