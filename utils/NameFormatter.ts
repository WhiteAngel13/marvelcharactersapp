export function NameFormatter(name : string){
  const nameSplitedBySpaces = name.split(" ")
  const nameMinified = nameSplitedBySpaces.map(
    (item, index, array) => 
      index === array.length-1 
      ? item 
      : `${item[0]}.`
  )
  
  const NameFormatted = nameMinified.join(" ")

  return NameFormatted;
}