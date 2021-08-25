import { AxiosResponse } from "axios";
import { SectionResponseFormattedItem } from "../../types/CharacterDataTypes";
import { imageFormatter } from "./imageFormatter";

type RequestItemFormatter = (item : AxiosResponse<any>) => SectionResponseFormattedItem

export const RequestItemFormatter : RequestItemFormatter = (item) => {
  const { data } = item;
  const result = data.data.results[0];
  
  const formattedItem : 
  SectionResponseFormattedItem = 
  {} as SectionResponseFormattedItem;

  try{
    formattedItem.name = result.title
    formattedItem.thumbnail = imageFormatter(result.thumbnail)
    formattedItem.wikiUrl = result.urls[0].url
    return formattedItem;
  }catch{
    return null;
  }
}