import { apiPure } from "../../services/api";
import { 
  SectionResponse, 
  SectionResponseFormatted,
  SectionResponseFormattedItem 
} from "../../types/CharacterDataTypes"
import { RequestItemFormatter } from "./RequestItemFormatter";

export async function SectionFormatter(sectionData : SectionResponse){
  const { 
    available, 
    items,
    collectionURI,
  } = sectionData

  const sectionDataFormatted = {} as SectionResponseFormatted;

  //collectionURI transfer and Array creation

  sectionDataFormatted.collectionURI = collectionURI;
  sectionDataFormatted.items = Array<SectionResponseFormattedItem>()

  //has items verification

  if(available === 0){
    return sectionDataFormatted;
  }

  //items requisition

  const itemsInPromise = items.map(item => apiPure.get(item.resourceURI))
  const itemsData = await Promise.all(itemsInPromise);

  sectionDataFormatted.items = itemsData.map(RequestItemFormatter).filter(aNullValues)

  return sectionDataFormatted
}

const aNullValues = (i:any) => i !== null