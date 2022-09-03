const Configuration = (props) => {

    
    return(
        <>
            <div>
                <label htmlFor = "no_of_chars">No of Characters: </label>
                <input type = "number"  id = "no_of_chars" className="f-right"  onChange={e=>props.setCharCount(e.target.value)}/>
            </div>
            <div>

                <label htmlFor = "include_number">Include Number</label>
                <input type = "checkBox" id = "include_number" className="f-right"  onChange={e => props.setInNumber(e.target.checked)}/>
            </div>
            <div>
                <label htmlFor = "include_spcl_char">Include Special Characters</label>
                <input type = "checkBox" id = "include_spcl_char" className="f-right" onChange={e => props.setSpclChar(e.target.checked) }/>

            </div>

            <div>
                <label htmlFor = "casing">Casing</label>
                <select defaultValue="" id = "casing" className="f-right" onChange={e => props.setCasing(e.target.value)}>
                    <option disabled value="" >SelectOption</option>
                    <option value = "lower">LowerCase</option>
                    <option value = "Upper">UpperCase</option>
                    <option value = "Mixx">MixedCase</option>
                </select>
            </div>
        </>
    )
}