const inputs = [
    {
        id: 'iniInv',
        label: 'Initial Investment'
    },
    {
        id: 'anuInv',
        label: 'Annual Investment'
    },
    {
        id: 'expRet',
        label: 'Expected Return'
    },
    {
        id: 'dur',
        label: 'Duration'
    }
]

export default function InputFields({userInputs, updateInputs}) {
    return (
        <div id="user-input">
            {inputs.map(input =>  <div className="input-group">
                <label htmlFor={input.id}>{input.label}</label>
                <input id={input.id} type="number" />
            </div>)}
        </div>
    )
}