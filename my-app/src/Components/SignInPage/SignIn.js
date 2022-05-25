import "./signin.css"; 
import { Link } from 'react-router-dom'
import {useState} from 'react'
import pregnantMom from './pregnantMother.webp'
function SignIn() {
	const [email ,setEmail] = useState("")
	const [password, setPassword] = useState("")

	const onFormSubmit = (e) => {
		e.preventDefault()
		const options = {
            method: 'POST',
			headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email:email, password:password})
        };

      try{
        fetch('http://localhost:8000/login', options).then((response) => {
			if(response.status !== 200){
				alert("wrong email or password")
				return;
			}
         document.location.replace("/")
        });
      }

      catch (error) {
        alert('Login Failed. Try Again')
      }

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