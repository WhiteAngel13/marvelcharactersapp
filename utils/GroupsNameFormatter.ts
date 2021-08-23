import { HomeHerosType } from "../types/HomeHerosType";

export function GroupsNameFormatter(array : HomeHerosType[]) : string[]{

  const allGroups = array.map(hero => hero.group);

  const FormattedGroups = [];

  allGroups.forEach(item => {
    if(!FormattedGroups.includes(item)){
      FormattedGroups.push(item)
    }
    })

  return FormattedGroups
}