
import { useState,useEffect } from "react"
import Card from "./Card"
const App = () =>{
  
const [images,setImage] = useState([])




useEffect(()=>{
fetch("https://api.unsplash.com/search/users?query=nas&client_id=PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg")
.then(res => res.json())
.then(data =>{
  console.table(data.results[0])
  setImage(data.results)
  // setValues(data.results)

})
},[])

return (
  <>
  {images.map((img,i) => <Card imgname={img.profile_image.medium} name={img.name} username={img.username} key={i} id={img.id} likes={img.total_likes}/> )}
  </>
)
}

export default App