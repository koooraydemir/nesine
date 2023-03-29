import { MainContext,useContext } from "../../context";
import "./BetSlip.css"

function BetSlip() {
    
const {betSlipData} = useContext(MainContext)

function multiply(array) {
    var total = 1 
    for(var i=0;i < array.length; i++) {
        total = total * array[i].odd
    }
    return total.toFixed(2)

}
    return( 
        <div className="bet-slip">
        {betSlipData && betSlipData.map((line,index)=> {
          return (
            <div className="bet-slip-item" key={index}>
            <span>{line.mbs}</span>
            <span> Kod : {line.code}</span>
            <span> Maç : {line.name}</span>
            <span className="bet-slip-odd"> Oran : {line.odd}</span>
             </div>
          )
          })}
            <span className="bet-slip-total">  Toplam Tutar : { multiply(betSlipData) > 1 ? multiply(betSlipData)  : 0 } TL </span>
           
        </div>
    )
}
export default BetSlip