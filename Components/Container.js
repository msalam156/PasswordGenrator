const Container = () => {
    const [charCount,setCharCount] = React.useState(0);
    const [inNumber, setInNumber]  = React.useState(false);
    const [inSpclChar,setSpclChar] = React.useState(false);
    const [casing , setCasing]     = React.useState("");
    
    return(
        <div className = "container">
           <h2 className="title" >Password Generator</h2>
           <Configuration
           setCharCount = {setCharCount}
           setInNumber  = {setInNumber}
           setSpclChar  = {setSpclChar}
           setCasing    = {setCasing}
            />
           <br/>
           < GenerateButton
           charCount    = {charCount}
           setCharCount = {setCharCount}
           inNumber     = {inNumber}
           setInNumber  = {setInNumber}
           inSpclChar   = {inSpclChar}
           setSpclChar  = {setSpclChar}
           casing       = {casing}
           setCasing    = {setCasing}
           />
          
        </div>
    )
}