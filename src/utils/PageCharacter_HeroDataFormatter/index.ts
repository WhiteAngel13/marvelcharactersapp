import { CharacterDataApi, CharacterData } from "../../types/CharacterDataTypes";
import { SectionFormatter } from "./SectionFormatter";
import { imageFormatter } from "./imageFormatter";

const emptyDescriptionDefaultMensage = "This character has no description"

type PageCharacter_HeroDataFormatter = 
  (heroData : CharacterDataApi) => CharacterData;

export async function PageCharacter_HeroDataFormatter (heroData : CharacterDataApi) {

  const {
    id, 
    name, 
    description, 
    thumbnail, 
    comics, 
    events,
    series,
    stories,
    modified
  } = heroData

  const heroDataFormatted : CharacterData = {} as CharacterData; 
  
  //Id, name transfer

  heroDataFormatted.id = id
  heroDataFormatted.name = name;

  //Description Format

  if(description === ""){
    heroDataFormatted.description = emptyDescriptionDefaultMensage
  }else{
    heroDataFormatted.description = description
  }

  //Formatação da Imagem

  heroDataFormatted.thumbnail = imageFormatter(thumbnail);

  //Formatação de Sessões

  heroDataFormatted.comics = await SectionFormatter(comics);
  heroDataFormatted.events = await SectionFormatter(events);
  heroDataFormatted.series = await SectionFormatter(series);
  // heroDataFormatted.stories = await SectionFormatter(stories);
  
  // Formatação Finalizada

  return heroDataFormatted
  
}