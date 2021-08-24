import { 
  createContext, 
  Dispatch, 
  ReactNode, 
  SetStateAction, 
  useContext, 
  useMemo, 
  useState 
} from "react";

import { HomeHerosType } from "../../types/HomeHerosType";
import { GroupsNameFormatter } from "../../utils/GroupsNameFormatter";

interface HomeApplicationContext {
  formattedGroups: string[];
  setGroupToShow: Dispatch<SetStateAction<string>>;
  herosDataFiltered: HomeHerosType[];
  listLength: number;
  setChosenHero: Dispatch<SetStateAction<number>>;
  chosenHeroData: HomeHerosType
}


interface HomeApplicationProviderProps{
  children: ReactNode;
  herosData: HomeHerosType[];
}

const HomeApplicationContext = createContext({} as HomeApplicationContext)

export function HomeApplicationProvider({
  children,
  herosData 
} : HomeApplicationProviderProps){

  const [formattedGroups] = useState(GroupsNameFormatter(herosData))
  const [groupToShow, setGroupToShow] = useState(formattedGroups[0])
  
  const herosDataFiltered = useMemo(
    ()=> herosData.filter(hero =>hero.group === groupToShow), 
    [groupToShow, herosData]
  )

  const [chosenHero, setChosenHero] = useState(0)
  const chosenHeroData = herosDataFiltered[chosenHero]
  
  const listLength = herosDataFiltered.length

  const value = {
    formattedGroups,
    setGroupToShow,
    herosDataFiltered,
    listLength,
    setChosenHero,
    chosenHeroData
  }

  return(
    <HomeApplicationContext.Provider value={value}>
      {children}
    </HomeApplicationContext.Provider>
  )
}

export const useHomeApplication = () => useContext(HomeApplicationContext)