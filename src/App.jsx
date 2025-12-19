import MainHeader from "./components/MainHeader/MainHeader"
import InputFields from "./components/InputFIelds/InputFields"
import { useState } from "react"

function App() {
  const [userInputs, setUserInputs] = useState({
    iniInv: 10000,
    anuInv: 3000,
    expRet: 5.56,
    dur: 10
  })

  const handleUserInputs = (newInputs) =>  {
    setUserInputs((oldInputs) => {
      oldInputs = newInputs
    })
  }
  return (
    <>
    <MainHeader />
    <InputFields userInputs={userInputs} updateInputs={handleUserInputs}/>
    </>
  )
}

export default App
