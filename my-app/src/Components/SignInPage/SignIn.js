import "./signin.css"; 
import { Link } from 'react-router-dom'
import {useState} from 'react'
import pregnantMom from './pregnantMother.webp'
function SignIn() {
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import {useContext} from 'react';
function SignIn({setAuth}) {

  const [email ,setEmail] = useState("")
	const [password, setPassword] = useState("")
	const {setUser} = useContext(AppContext);
	const navigate = useNavigate();

	const onFormSubmit = async (e) => {
		e.preventDefault()
		const loginData = {
			email,
			password,
		  };

		  const res = await fetch(`http://localhost:8000/login`, {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify(loginData),
		  });
		  const data = await res.json();
		  console.log(data.user);
		  if (data.token) {
			window.localStorage.setItem("token", data.token);
			setAuth(true);
		  } else {
			setAuth(false);
		  }
		  if (data.rows.length > 1) {
			navigate("/", { replace: true });
			// setUser(data.user);
		  }
		  setEmail("");
		  setPassword("");

};

    return (
		<div className="main">
      {/* <img class= "image" alt="" src= {pregnantMom} />  */}
      <p className="doulado" align="center">Welcome to DoulaDo!</p>
			<p className="sign" align="center">Sign in!</p>
			<form className="form1">
			{/* <input class="un " type="text" align="center" placeholder="Username"/> */}
			<input className="un " type="text" autoComplete="username" align="center" placeholder="Email" value={email} onChange={(e)=> {setEmail(e.target.value);} }/>
			<input className="pass" type="password"  autoComplete="current-password" align="center" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value)}}/>
			<button onClick={onFormSubmit} type="submit" className="submit" align="center">Sign in</button>
			</form>
			<p className="forgot" align="center">Forgot Password?</p>  
			<p className="notenrolled" align="center">Not Enrolled? Sign Up Now.</p>    
			<button type="submit" className="doulasignup" align="center"><Link to="/DoulaSignUp">Doula Sign Up</Link></button><br/><br/>
			<button  type="submit" className="familysignup" align="center"> <Link to="/FamilySignUp">Family Sign Up</Link></button>          
    </div>
	)
}


export default SignIn;