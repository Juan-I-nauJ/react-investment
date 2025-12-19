import { calculateInvestmentResults } from "../../util/investment"
const theads = ['Year', 'Interest', 'Value end of Year', 'Annual Investment']

export default function ResultsTable({userInputs}) {
    const tableResults = calculateInvestmentResults(userInputs)
    
    return (
        <table id="result" className="center">
            <tr>
                {theads.map(thead => <th>{thead}</th>)}
            </tr>
            {tableResults.map(result =>
            <tr>
        {Object.keys(result).map(key => <td>{result[key]}</td>)}
        </tr>)}
        </table>
    )
}