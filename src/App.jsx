import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { Result } from "./components/Result"
import { useState } from "react"

function App() {
  const [invesment,updateInvestment] = useState({
    initial : 10000,
    annual : 900,
    expected : 5.5,
    duration :12
  });
  function handleChangeInvestment(field,newvalue){
    updateInvestment((current)=>{
      return {
        ...current,
        [field]:newvalue
      }
    })
  }
  return (
    <>
      <Header/>
      <Input valueInvest = {invesment} onChangeInvestment = {(field,value)=>{
        handleChangeInvestment(field,value)
      }}/>
      <Result valueInvest = {invesment}/>
    </>
  )
}

export default App
