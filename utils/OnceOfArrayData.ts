export function OnceOfArrayData(array : Array<any>){
  const OnceOfArrayData = [];

  array.forEach(item => {
    if(!OnceOfArrayData.includes(item)){
      OnceOfArrayData.push(item)
    }
  })

  return OnceOfArrayData
}