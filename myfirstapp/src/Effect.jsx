import React from 'react'
import Course from './Course';
import {useEffect} from 'react'

export default function Effect() {
 
    useEffect(()=>{
        console.log("Printed from useEffect");
    },[]);
    
  return (
    <Course
        name={"audi"}
        price={"200k$"} 
        image={"empty"}
      />
  )

  
}