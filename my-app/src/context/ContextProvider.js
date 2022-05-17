import React, { useState } from "react";
import AppContext from "./AppContext";

const ContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const context = {
    users,
    setUsers,
    posts,
    setPosts
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
