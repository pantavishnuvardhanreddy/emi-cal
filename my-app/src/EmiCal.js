import { useState } from "react";
function EmiCalculator(props){
    const [order,setOrder] = useState({
        loanAmount:"100000",
        interestRate:'14.66',
        tenure:"48"
    });
    const interest = (order.loanAmount * (order.interestRate * 0.01))/order.tenure;

    function updateValue(event){
       console.log(event.target);
       setOrder({...order,[event.target.name]:event.target.value });
       };
    function calculateTotal(){
        if(order.tenure < 0){
            return "error";
        }
        const EMI = ((order.loanAmount/order.tenure)+ interest).toFixed(2);
        return EMI;
    }     
    return (
      <>
      <h4>EMI CALCULATOR</h4>
      <div>
      <h3>Loan Amount (): {order.loanAmount} </h3>
      <input value = {order.loanAmount} min='100000' max='1000000' name='loanAmount' type='range'onChange={updateValue}></input>
      <h3>interestRate(in percentage(%):{order.interestRate} </h3>
      <input value = {order.interestRate} min='14.69' max='19.59' step='0.01' name='interestRate' type='range' onChange={updateValue}></input>  
      
      <h3>Tenure(in Months):{order.tenure} </h3>
      <input placeholder="tenure in months" min='12' max='84' value={order.tenure} type="number" name='tenure' onChange={updateValue}></input>
      
      <h3>Monthly Payable EMI Amount = {calculateTotal()}</h3>
      </div>
      </>

    )
}
export default EmiCalculator