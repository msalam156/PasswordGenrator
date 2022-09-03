const GenerateButton = (props) => {
    const[password,setPassword] = React.useState("");
    const generatPassword = _=>{
        let chars = "";
       switch(props.casing) {
          case "lower":
            chars = "abcdefghijklmnopqrstuvwxyz";
            break;
          case "Upper":
            chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
          case "Mixx":
            chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
          default:
            chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
       }
       if(props.inNumber) {
        chars = chars + "123456789";
       }
       if(props.inSpclChar) {
        chars = chars + "!@#$%^&*_-~`";
       }
      var pass = "";
       let charCount = props.charCount;
       if(charCount > 15){charCount = 16;}
       if(charCount < 1) {charCount = 1;}
       for(let i = 0 ; i < props.charCount; i++) {
       const index = Math.ceil(Math.random() * chars.length);
       const singleChar = chars.charAt(index);
       pass += singleChar;
       }

      setPassword(pass);
     }

    // charCount    = {charCount}
    // setCharCount = {setCharCount}
    // inNumber     = {inNumber}
    // setInNumber  = {setInNumber}
    // inSpclChar   = {inSpclChar}
    // setSpclChar  = {setSpclChar}
    // casing       = {casing}
    // setCasing    = {setCasing}
    return(
        <div>
            <button className = "action_btn" onClick={generatPassword}>Generate</button>
            {password !== "" ? <p className ="op_pass">{password}</p> : false}
            
        </div>
    )
}