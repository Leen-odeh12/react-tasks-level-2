import React from 'react'
import { useState } from 'react'
import style from './Usestate.module.css'
const Usestate = () => {

    const [name,setname]= useState("user-name")
    const [age,setage]= useState("0")
   let [count,setcount]= useState("0")

    const change =()=>{
     setname("leen")
    }
    const alter=()=>{
        setage(22)
       }

     const increment =()=>{
      setcount(count++)
     }
  return (
    <div>
      
      <div className={style.one}>
        <h1> My name is {name}</h1>
        <button onClick={change} className={style.btn}>change name </button>
      </div>

      <div className={style.two}>
        <h1> My age is {age}</h1>
        <button onClick={alter} className={style.btn}>change name </button>
      </div>
     {/* task-3> */}
      <div className={style.three}>
        <h1> My count is {count}</h1>
        <button onClick={increment} className={style.btn}> add </button>
      </div>
    </div>
  )
}

export default Usestate
