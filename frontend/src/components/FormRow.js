
const FormRow = ( {label, type, get, set} ) => {
    return(
        <div className="form-row">
            <label>{label}</label>
            <input
            type={type}
            onChange={(e) => set(e.target.value)}
            value={get}
            />
        </div>
    )
}

export default FormRow;