import { ReactNode } from "react"
import Tilt from "react-parallax-tilt"

interface StyledTiltProps {
  children: ReactNode,

  mt: string;
  w: string;
  h: string
}


export function StyledTilt({
  children,
  h,
  w,
  mt,
} : StyledTiltProps){
  
  
  return(
    <Tilt
      style={{
        display: "flex",
        flexDirection: "column",

        border: "#222 solid 10px",
        borderRadius: "10px",

        marginTop:mt,
        height:h,
        width:w,

        backgroundColor:"#222222cc",

        userSelect:"none",
        
        cursor: "pointer"
      }}

      tiltReverse
    >
      {children}
    </Tilt>
  )
}