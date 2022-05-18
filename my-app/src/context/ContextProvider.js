import React, { useState } from "react";
import AppContext from "./AppContext";

const ContextProvider = (props) => {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postInput, setpostInput] = useState("");
  const context = {
    user,
    setUser,
    posts,
    setPosts,
    postInput,
    setpostInput
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
