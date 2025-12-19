import { calculateInvestmentResults, formatter } from "../../util/investment"
const theads = ['Year', 'Interest', 'Value end of Year', 'Annual Investment']

export default function ResultsTable({userInputs}) {
    const tableResults = calculateInvestmentResults(userInputs)

    return (
        <table id="result" className="center">
            <tbody>
            <tr>
                {theads.map(thead => <th key={thead}>{thead}</th>)}
            </tr>
            {tableResults.map((result, idx) =>
            <tr key={idx}>
        {Object.keys(result).map(field => <td key={field}>{field !== 'year' ? formatter.format(result[field]) : result[field]}</td>)}
        </tr>)}
        </tbody>
        </table>
    )
}