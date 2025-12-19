import MainHeader from "./components/MainHeader/MainHeader"
import InputFields from "./components/InputFIelds/InputFields"
import { useState } from "react"
import ResultsTable from "./components/ResultsTable/ResultsTable"

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 3000,
    expectedReturn: 5.56,
    duration: 10
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
    <ResultsTable userInputs={userInputs} />
    </>
  )
}

export default App
