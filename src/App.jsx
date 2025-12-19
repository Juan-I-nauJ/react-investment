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

  const handleUserInputs = ({target}) =>  {
    setUserInputs((oldInputs) => {
      oldInputs = {...oldInputs, [target.id]: Number(target.value > 0 ? target.value : 1)}
      return oldInputs
    })
  }
  return (
    <main>
    <InputFields userInputs={userInputs} updateInputs={handleUserInputs}/>
    <ResultsTable userInputs={userInputs} />
    </main>
  )
}

export default App
