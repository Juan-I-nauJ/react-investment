import { calculateInvestmentResults, formatter } from "../../util/investment"
const theads = ['Year', 'Investment Value', 'Interest(year)', 'Total Interest', 'Invested Capital']

export default function ResultsTable({ userInputs }) {
    const investmentResults = calculateInvestmentResults(userInputs)
    const finalResults = () => {
        const calcInvestmentValue = (idx) => userInputs.initialInvestment + userInputs.annualInvestment * (idx + 1)
        let compoundInterest = 0
        return investmentResults.map((result, idx) => {
        compoundInterest += result.interest
        const finalResult = { 
            year: result.year, 
            investmentValue: compoundInterest + calcInvestmentValue(idx), 
            interest: result.interest, 
            totalInterest: compoundInterest,
            investedCapital: calcInvestmentValue(idx)
        }
            return finalResult
    })}


    return (
        <table id="result" className="center">
            <tbody>
                <tr>
                    {theads.map(thead => <th key={thead}>{thead}</th>)}
                </tr>
                {finalResults().map((result, idx) =>
                    <tr key={idx}>
                        {Object.keys(result).map(field => <td key={field}>{field !== 'year' ? formatter.format(result[field]) : result[field]}</td>)}
                    </tr>)}
            </tbody>
        </table>
    )
}