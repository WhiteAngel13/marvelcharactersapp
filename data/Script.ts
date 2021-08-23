// export const getServerSideProps : GetServerSideProps = async(ctx) => {

//   let herosToFirebase = []

//   for await (let heroName of listHeros){
//     const { data } = await api.get("characters",{
//       params:{
//         nameStartsWith:heroName
//       }
//     })

//     data.data.results.forEach(async result=>{
//       const {id, name, description, thumbnail} = result
//       await loadData(id, name, description, thumbnail)
//     })
    
//   }
  
//   return{
//     props:{data}
//   }
// }

// async function loadData(id: number, name:string, description:string, thumbnail:{}) {
  
//   await db.collection("Home_Heros_Data_rising").doc(name).set({
//     id,
//     name,
//     description,
//     thumbnail,
//     group: "rising"
//   })
// }

// export const getServerSideProps : GetServerSideProps = async(ctx) => {

//   const herosData = []

//   const response = await db.collection("Home_Heros_Data_rising").get()
//   response.forEach(async item => {
//     const itemData = item.data();

//     itemData.thumbnail = `${itemData.thumbnail.path}/portrait_incredible.${itemData.thumbnail.extension}`

//     itemData.name = itemData.name.split("(").filter((name:string) => name[name.length-1] !== ")").join()

//     console.log(itemData)
//     if(itemData.description === ""){
//       itemData.description = "This character has no description"
//     }

//     if(itemData.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_incredible.jpg"){
//       return;
//     }

//     herosData.push(itemData)
//     // await loadData(itemData)
//   })

//   return {
//     props: {
//       herosData
//     }
//   }
// }

// async function loadData(item) {
  
//   await db.collection("Home_Heros_Data").doc(item.name).set({
//     ...item,
//     group: "spider-man"
//   })
// }

export {}