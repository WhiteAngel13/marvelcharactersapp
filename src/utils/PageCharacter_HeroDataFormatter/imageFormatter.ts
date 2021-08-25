
type ThumbnailType = {
  extension: string,
  path: string
}

const image_not_available_paths = [
  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_incredible.jpg"
]
 
export function imageFormatter(thumbnail : ThumbnailType){

  const { extension, path } = thumbnail
  const imagePath = `${path}/portrait_incredible.${extension}`

  if (image_not_available_paths.includes(imagePath)){
    throw new Error("Image is not Available");
  }else{
    return imagePath
  }
}