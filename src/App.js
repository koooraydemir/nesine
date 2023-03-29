import MarketHeaders from './components/Market/MarketHeaders.js';
import BetLine from './components/Line/BetLine.js';
import BetSlip from './components/BetSlip/BetSlip.js';
import React, {useState } from 'react'
import { MainContext } from './context';
function App() {

  const [betSlipData, setBetSlip] = useState([])

  const data = {
  betSlipData,
  setBetSlip
  }
    return (
      <MainContext.Provider value={data}>
        <MarketHeaders/>
         <BetLine/>
         <BetSlip/>
      </MainContext.Provider>
    )
}


export default App;
