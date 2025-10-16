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
  function handleChangeInvestment({initial,annual,expected,duration}){
    updateInvestment((current)=>{
      const newState = {...current};
      newState.initial = initial;
      newState.annual = annual;
      newState.expected = expected;
      newState.duration = duration;
      return newState;
    })
  }
  return (
    <>
      <Header/>
      <Input valueInvest = {invesment} onChangeInvestment = {({initial,annual,expected,duration})=>{
        handleChangeInvestment({initial,annual,expected,duration})
      }}/>
      <Result valueInvest = {invesment}/>
    </>
  )
}

export default App
