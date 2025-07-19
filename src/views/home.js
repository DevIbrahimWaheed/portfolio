import React, { useEffect } from 'react';
import TextTransition,{presets} from "react-text-transition"

const Words = [ "Hi I'm Ibby" ,"Welcome to my portfolio page" ,"See my GitHub" , "or LinkedIn"]

function Home(props){
     const [index, setIndex] = React.useState(0);

useEffect(()=>{
const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);


},[])

return (
  
  <div style={{ padding: 24, minHeight: 360 }}>
         <h1>
         <TextTransition
        text={ Words[index % Words.length] }
        springConfig={ presets.molasses }
      />
         
         </h1>
         


            </div>
  
  
  )



}

export default Home
