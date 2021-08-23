export function GroupsNameFormatter(array : Array<any>){
  const OnceOfArrayDataUnformatted = [];

  array.forEach(item => {
    if(!OnceOfArrayDataUnformatted.includes(item)){
      OnceOfArrayDataUnformatted.push(item)
    }
    })

  const OnceOfArrayData = OnceOfArrayDataUnformatted.map(item => item.split("-").join(" "))

  return OnceOfArrayData
}