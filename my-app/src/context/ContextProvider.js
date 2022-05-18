import React, { useState } from "react";
import AppContext from "./AppContext";

const ContextProvider = (props) => {
  const [user, setUser] = useState({id:3, first_name:"Andrew" , last_name:"Enoe", birthday:"8/10/1997", password: "Andrew", email:"andrewm.enoe@gmail.com", medicaid:"No", is_doula:"Yes", gender: "women", doula_skillset:"Lotus flower birth"});
  const [posts, setPosts] = useState([]);
  const [postInput, setpostInput] = useState("");
  const [currInput, setcurrInput] = useState("");
  const context = {
    user,
    setUser,
    posts,
    setPosts,
    postInput,
    setpostInput,
    currInput,
    setcurrInput
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
