import "./signup.css";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';

function SignIn() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [medicaid, setMedicaid] = useState("No");
  const [isDoula, setIsDoula] = useState("No");
  const navigate = useNavigate();

  function handleFNameInput(e) {
    setFirstName(e.target.value);
  }

  function handleLNameInput(e) {
    setLastName(e.target.value);
  }

  function handleGenderInput(e) {
    setGender(e.target.value);
  }

  function handleMedicaidInput(e) {
    setMedicaid(e.target.value);
  }

  function handleDoulaInput(e) {
    setIsDoula(e.target.value);
  }

  function handleRegister(e) {
    e.preventDefault();
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        gender,
        medicaid,
        is_doula: isDoula === "Yes" ? true : false
      })})
    .then(response => response.json())
    Swal.fire('Successfully Registered');
    navigate("/", {replace:true});
  }

  return (
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
          value={firstName}
          onChange={handleFNameInput}
        />
        <input
          className="pass"
          type="text"
          autoComplete="current-password"
          align="center"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={handleLNameInput}
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
        />
        <input
          className="pass"
          type="text"
          align="center"
          placeholder="Gender"
          value={gender}
          onChange={handleGenderInput}
        />
        <input
          className="pass"
          type="tel"
          id="phone"
          align="center"
          placeholder="Enter Your Phone Number"
          required
        />
        <p id="medicaidques"> Do you Have Medicaid</p>
        <select
          id="medicaidSelect"
          className="form-select"
          name="select"
          type="select"
          value={medicaid}
          onChange={handleMedicaidInput}
        >
          <option>Yes</option>
          <option>No</option>
        </select>
        <p id="doulaques"> Are you a Doula?</p>
        <select
          id="medicaidSelect"
          className="form-select"
          name="select"
          type="select"
          value={isDoula}
          onChange={handleDoulaInput}
        >
          <option>Yes</option>
          <option>No</option>
        </select>
        {/* <p id="doulaexperience">  How long have you been a doula?</p> */}
        {/* <Input
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
        </Input> */}
        <div className="d-flex justify-content-around ">
          <button type="submit" className="doulasignup">
            <Link to={"/"}>Back to Sign In</Link>
          </button>
          <button
            type="submit"
            className="doulasignup"
            align="center"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
