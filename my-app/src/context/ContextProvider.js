import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";

const ContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [postInput, setpostInput] = useState("");
  const [currInput, setcurrInput] = useState("");
  const [comments, setComments] = useState([]);
  const [first_name, setfirst_Name ] = useState("")
  const [ last_name, setlast_Name ] = useState("")
  const [ email, setuserEmail] = useState("")
  const [contactNumber, setcontactNumber] = useState("")
  const [medicaid, setMedicaid] = useState("")
  const [password, setconfirmPassword] = useState("")
  const [gender, setgenderWm] = useState("")
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const userToken = window.localStorage.getItem("token");
    if (!userToken) return
    async function checkAuth() {
      const response = await fetch('http://localhost:8000/authenticate', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({userToken})
      })

      const data = await response.json();
      console.log(data);
      if(data.isAuth) {
        setIsAuth(true);
      }
      setUser({id: window.localStorage.getItem('id')})
      
    }
    
    checkAuth();
  },[])

  useEffect(() => {
    fetch("http://localhost:8000/posts")
    .then(response => response.json())
    .then(data => setPosts(data.data))
  },[])

  useEffect(() => {
    fetch(`http://localhost:8000/comments`)
    .then(response => response.json())
    .then(data => setComments(data))
  }, []);

  const context = {
    user,
    setUser,
    posts,
    setPosts,
    postInput,
    setpostInput,
    currInput,
    setcurrInput,
    comments,
    setComments,
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
    setgenderWm,
    isAuth,
    setIsAuth
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
