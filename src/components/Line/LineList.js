import React, {useContext } from 'react'
import { MainContext } from '../../context';
import './line.css';

function LineList({data}) {

  const {betSlipData,setBetSlip} = useContext(MainContext)
  
  const checkActive1 = (item) => {
    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[1].OC[0].O,
      NID: item.NID
    }
    if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === item.OCG[1].OC[0].O)) {
      return true
    }
    else {
      return false
    }
  }
  const checkActiveX = (item) => {

    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[1].OC[1].O,
      NID: item.NID
    }
    if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === item.OCG[1].OC[1].O)) {
      return true
    }
    else {
      return false
    }
  }
  const checkActiveUnder = (item) => {
    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[5].OC[25].O,
      NID: item.NID
    }
    if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === item.OCG[5].OC[25].O)) {
      return true
    }
    else {
      return false
    }
  }
  const checkActiveOver = (item) => {
    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[5].OC[26].O,
      NID: item.NID
    }
    if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === item.OCG[5].OC[26].O)) {
      return true
    }
    else {
      return false
    }
  }
  const checkActive1x = (item) => {
    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[2].OC[3].O,
      NID: item.NID
    }
    if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === item.OCG[2].OC[3].O)) {
      return true
    }
    else {
      return false
    }
  }

  const checkActive12 = (item) => {
    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[2].OC[4].O,
      NID: item.NID
    }
    if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === item.OCG[2].OC[4].O)) {
      return true
    }
    else {
      return false
    }
  }

  const checkActiveX2= (item) => {
    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[2].OC[5].O,
      NID: item.NID
    }
    if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === item.OCG[2].OC[5].O)) {
      return true
    }
    else {
      return false
    }
  }

  const addToBetSlip1Win = (item) => 
  {
 
    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[1].OC[0].O,
      NID: item.NID
    }
  
    if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === newItem.odd)) {
      const filteredBetSlipData = betSlipData.filter(x=> {
        return x.NID !== newItem.NID
      })
      setBetSlip(filteredBetSlipData);
     }
     else {
      if(betSlipData.find(c=> c.NID === newItem.NID)) {
        const filteredBetSlipData = betSlipData.filter(x=> {
          return x.NID !== newItem.NID
        })
        setBetSlip(filteredBetSlipData);
          setBetSlip([...filteredBetSlipData, newItem]);
      }
      else {
        setBetSlip([...betSlipData, newItem]);
      }
   
     }
  }
  
  const addToBetSlipXWin = (item) => 
  {
   
    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[1].OC[1].O,
      NID: item.NID
    }
    if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === newItem.odd)) {
      const filteredBetSlipData = betSlipData.filter(x=> {
        return x.NID !== newItem.NID
      })
      setBetSlip(filteredBetSlipData);
     }
     else {
      if(betSlipData.find(c=> c.NID === newItem.NID)) {
        const filteredBetSlipData = betSlipData.filter(x=> {
          return x.NID !== newItem.NID
        })
        setBetSlip(filteredBetSlipData);
        setBetSlip([...filteredBetSlipData, newItem]);
      }
      else {
        setBetSlip([...betSlipData, newItem]);
      }
   
     }
  }
  const addToBetSlipUnder = (item) => 
  {
    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[5].OC[25].O,
      NID: item.NID
    }
    if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === newItem.odd)) {
      const filteredBetSlipData = betSlipData.filter(x=> {
        return x.NID !== newItem.NID
      })
      setBetSlip(filteredBetSlipData);
     }
     else {
      if(betSlipData.find(c=> c.NID === newItem.NID)) {
        const filteredBetSlipData = betSlipData.filter(x=> {
          return x.NID !== newItem.NID
        })
        setBetSlip(filteredBetSlipData);
        setBetSlip([...filteredBetSlipData, newItem]);
      }
      else {
        setBetSlip([...betSlipData, newItem]);
      }
   
     }
  }
  const addToBetSlipOver = (item) => 
  {
    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[5].OC[26].O,
      NID: item.NID
    }
    if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === newItem.odd)) {
      const filteredBetSlipData = betSlipData.filter(x=> {
        return x.NID !== newItem.NID
      })
      setBetSlip(filteredBetSlipData);
     }
     else {
      if(betSlipData.find(c=> c.NID === newItem.NID)) {
        const filteredBetSlipData = betSlipData.filter(x=> {
          return x.NID !== newItem.NID
        })
        setBetSlip(filteredBetSlipData);
        setBetSlip([...filteredBetSlipData, newItem]);
      }
      else {
        setBetSlip([...betSlipData, newItem]);
      }
   
     }
  }
  const addToBetSlip1XWin = (item) => 
  {
    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[2].OC[3].O,
      NID: item.NID
    }
    if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === newItem.odd)) {
      const filteredBetSlipData = betSlipData.filter(x=> {
        return x.NID !== newItem.NID
      })
      setBetSlip(filteredBetSlipData);
     }
     else {
      if(betSlipData.find(c=> c.NID === newItem.NID)) {
        const filteredBetSlipData = betSlipData.filter(x=> {
          return x.NID !== newItem.NID
        })
        setBetSlip(filteredBetSlipData);
        setBetSlip([...filteredBetSlipData, newItem]);
      }
      else {
        setBetSlip([...betSlipData, newItem]);
      }
   
     }
  }
  const addToBetSlip12Win = (item) => 
  {
    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[2].OC[4].O,
      NID: item.NID
    }
    if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === newItem.odd)) {
      const filteredBetSlipData = betSlipData.filter(x=> {
        return x.NID !== newItem.NID
      })
      setBetSlip(filteredBetSlipData);
     }
     else {
      if(betSlipData.find(c=> c.NID === newItem.NID)) {
        const filteredBetSlipData = betSlipData.filter(x=> {
          return x.NID !== newItem.NID
        })
        setBetSlip(filteredBetSlipData);
        setBetSlip([...filteredBetSlipData, newItem]);
      }
      else {
        setBetSlip([...betSlipData, newItem]);
      }
   
     }
  }
  const addToBetSlipX2Win = (item) => 
  {
    let newItem = {
      mbs: item.OCG[1].MBS,
      code: item.C,
      name: item.N,
      odd: item.OCG[2].OC[5].O,
      NID: item.NID
    }
       if(betSlipData.find(c=> c.NID === newItem.NID) && betSlipData.find(c=> c.odd === newItem.odd)) {
        const filteredBetSlipData = betSlipData.filter(x=> {
          return x.NID !== newItem.NID
        })
        setBetSlip(filteredBetSlipData);
       }
       else {
        if(betSlipData.find(c=> c.NID === newItem.NID)) {
          const filteredBetSlipData = betSlipData.filter(x=> {
            return x.NID !== newItem.NID
          })
        
          setBetSlip(filteredBetSlipData);
          setBetSlip([...filteredBetSlipData, newItem]);
        }
        else {
          setBetSlip([...betSlipData, newItem]);
        }
     
       }
  }
  return (
    <div>
      <div className="line-list">

      <div className="line-col">
        <span>{data.C}</span>
        <span>{data.T} </span>
        <span>{data.N}</span>
      </div>
      <div className="line-col-2">
          <span>Yorumlar</span>
          <span >{data.OCG[1].MBS}</span>
          <span  className={` ${checkActive1(data) ? "active" : ""}`} onClick={()=> addToBetSlip1Win(data)} >{data.OCG[1].OC[0].O}</span>
          <span  className={` ${checkActiveX(data) ? "active" : ""}`} onClick={()=> addToBetSlipXWin(data)} >{data.OCG[1].OC[1].O}</span>
          <span>{}</span>
          <span  className={` ${checkActiveUnder(data) ? "active" : ""}`} onClick={()=> addToBetSlipUnder(data)} >{data.OCG[5].OC[25].O}</span>
          <span  className={` ${checkActiveOver(data) ? "active" : ""}`} onClick={()=> addToBetSlipOver(data)} >{data.OCG[5].OC[26].O}</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span  className={` ${checkActive1x(data) ? "active" : ""}`} onClick={()=> addToBetSlip1XWin(data)} >{data.OCG[2].OC[3].O}</span>
          <span   className={` ${checkActive12(data) ? "active" : ""}`} onClick={()=> addToBetSlip12Win(data)} >{data.OCG[2].OC[4].O}</span>
          <span  className={` ${checkActiveX2(data) ? "active" : ""}`} onClick={()=> addToBetSlipX2Win(data)} >{data.OCG[2].OC[5].O}</span> 
          <span></span>
          <span></span>
          <span>3</span>
          </div>
      </div>
    </div>
  );
}

export default LineList;
