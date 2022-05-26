import "./signup.css";
import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { FormGroup, Label, Input } from "reactstrap";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [doulaExperience, setDoulaExperience] = useState("");
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
      navigate("/home");
    }
    loginUser();

    setEmail("");
    setPassword("");
  };

  return isAuth ? (
    <Navigate to="/home" />
  ) : (
    <div className="main">
      {/* <img class= "image" alt="" src= {pregnantMom} />  */}
      <p className="doulado" align="center">
        Welcome to DoulaDo!
      </p>
      <p className="signupgreet" align="center">
        Sign Up and Get Connected!
      </p>

      <form className="form1">
        {/* <input class="un " type="text" align="center" placeholder="Username"/> */}
        <input
          className="un "
          type="text"
          autoComplete="username"
          align="center"
          placeholder="First Name"
          required
        />
        <input
          className="pass"
          type="text"
          autoComplete="current-password"
          align="center"
          placeholder="Last Name"
          required
        />
        <input
          className="pass"
          type="text"
          align="center"
          placeholder="Partners First Name (Optional)"
        />
        <input
          className="pass"
          type="text"
          align="center"
          placeholder="Partners Last Name (Optional)"
        />
        <input
          className="pass"
          type="email"
          align="center"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="pass"
          type="password"
          autoComplete="current-password"
          align="center"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="pass"
          type="password"
          autoComplete="current-password"
          align="center"
          placeholder="Confirm Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="pass"
          type="text"
          align="center"
          placeholder="Gender"
        />

        <input
          className="pass"
          type="tel"
          id="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          align="center"
          placeholder="Enter Your Phone Number"
          required
        />
        <p id="medicaidques"> Do you Have Medicaid</p>
        <Input id="medicaidSelect" name="select" type="select">
          <option>Yes</option>
          <option>No</option>
        </Input>

        <p id="doulaques"> Are you a Doula?</p>
        <Input id="medicaidSelect" name="select" type="select">
          <option>Yes</option>
          <option>No</option>
        </Input>
        <p id="doulaexperience">  How long have you been a doula?</p>
        <Input
          value={doulaExperience}
          onChange={(event) => {
            setDoulaExperience(event.target.value);
          }}
          id="doulaExperienceSelect"
          name="select"
          type="select"
          placeholder="Select One"
        >
          <option>Less than 1 year</option>
          <option>2-5 years</option>
          <option>5-10years</option>
          <option>More than 10 years</option>
          <option>5 years</option>
        </Input>

        <button type="submit" className="doulasignup" align="center">
          Register
        </button>
      </form>
    </div>
  );
}

export default SignIn;
