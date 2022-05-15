import "./signin.css"; 
import {Link} from 'react-router-dom'
function SignIn() {
    return (
		<div class="main">
			<p class="sign" align="center">Sign in</p>
			<form class="form1"/>
			<input class="un " type="text" align="center" placeholder="Username"/>
			<input class="un " type="text" align="center" placeholder="Email"/>
			<input class="pass" type="password" align="center" placeholder="Password"/>
			<button type="submit" class="submit" align="center">Sign in</button>
			<p class="forgot" align="center">Forgot Password?</p>  
			<p class="notenrolled" align="center">Not Enrolled? Sign Up Now.</p>    
			<button type="submit" class="doulasignup" align="center">Doula Sign Up</button><br/><br/>
			<button  type="submit" class="familysignup" align="center"> <Link to="/FamilySignUp">Family Sign Up</Link></button>          
    </div>
	)
}

export default SignIn;