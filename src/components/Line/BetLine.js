import React, {useState, useEffect } from 'react'
import LineHeader from './LineHeader.js';
import LineList from './LineList.js';

import axios from "axios"

function BetLine(){
  const [lineData,setLineData] = useState()

  useEffect( ()=>
  {
   axios.get(
      `https://nesine-case-study.onrender.com/bets`
    ).then(response => 
      setLineData(response.data)
     );
     
  },[])
    return (
        <div style={{marginTop:'40px'}}>
          {lineData && lineData.map((line,index)=> {
          return (
            <div  key={index}>
             <LineHeader data={line} ></LineHeader>
             <LineList data={line}></LineList>
             </div>
          )
          })}

        </div>
    )
  
    }

export default BetLine;
