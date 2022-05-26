import "./signin.css";
import { useState } from "react";
import pregnantMom from './pregnantMother.webp'
import { Link, useNavigate, Navigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, auth, isAuth, setIsAuth } = useContext(AppContext);
  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    async function loginUser() {
      const res = await fetch(`http://localhost:8000/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      if (!data.token) {
        setIsAuth(false);
        return;
      }
      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("id", data.user.id);
	  
      setIsAuth(true);
      setUser(data.user);
	    navigate('/home');
    }
    loginUser();

    setEmail("");
    setPassword("");
  };

  return isAuth ? <Navigate to="/home" /> : (
	<div className="mainthing">
  {/* <img class= "image" alt="" src= {pregnantMom} />  */}
  <p className="doulado" align="center">Welcome to DoulaDo!</p>
		<p className="sign" align="center">Sign in!</p>
		<form className="form1">
		{/* <input class="un " type="text" align="center" placeholder="Username"/> */}
		<input className="un " type="text" autoComplete="username" align="center" placeholder="Email" value={email} onChange={(e)=> {setEmail(e.target.value);} }/>
		<input className="pass" type="password"  autoComplete="current-password" align="center" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value)}}/>
		<button onClick={onFormSubmit} type="submit" className="submit" align="center">Sign in</button>
		</form>
		<p className="notenrolled" align="center">Not Enrolled? Sign Up Now.</p>    
		<button type="submit" className="doulasignupButton" align="center"><Link to="/SignUp">Sign Up Now!</Link></button><br/><br/>     
</div>
);
};


export default SignIn;
