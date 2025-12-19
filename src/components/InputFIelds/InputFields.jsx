const inputs = [
    {
        id: 'initialInvestment',
        label: 'Initial Investment'
    },
    {
        id: 'annualInvestment',
        label: 'Annual Investment'
    },
    {
        id: 'expectedReturn',
        label: 'Expected Return'
    },
    {
        id: 'duration',
        label: 'Duration'
    }
]
export default function InputFields({userInputs, updateInputs}) {
    console.log(userInputs)
    return (
        <div id="user-input">
            {inputs.map(input =>  <div className="input-group">
                <label htmlFor={input.id}>{input.label}</label>
                <input id={input.id} type="number" value={userInputs[input.id]} onChange={updateInputs}/>
            </div>)}
        </div>
    )
}