import React, { useState } from "react";
import AppContext from "./AppContext";

const ContextProvider = (props) => {
const [first_name, setfirst_Name ] = useState("")
const [ last_name, setlast_Name ] = useState("")
const [ email, setuserEmail] = useState("")
const [contactNumber, setcontactNumber] = useState("")
const [medicaid, setMedicaid] = useState("")
const [password, setconfirmPassword] = useState("")
const [gender, setgenderWm] = useState("")

  const context = {
    first_name, 
    setfirst_Name, 
    last_name, 
    setlast_Name, 
    email, 
    setuserEmail, 
    password, 
    setconfirmPassword,
    contactNumber, 
    setcontactNumber, 
    medicaid, 
    setMedicaid,
    gender, 
    setgenderWm

  };

  return (
    <AppContext.Provider value={context}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
