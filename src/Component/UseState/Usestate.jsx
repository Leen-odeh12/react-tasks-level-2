import React, { useState } from 'react'


const Usestate = () => {

    const [background ,setbackground]=useState("white");
  return (
    <div style={{width:"100%",height:"100vh",backgroundColor:background}} >
      <button onClick={()=>{setbackground("White")}}>light</button>
      <button onClick={()=>{setbackground("#242424")}}>dark </button>
    </div>
  )
}

export default Usestate
