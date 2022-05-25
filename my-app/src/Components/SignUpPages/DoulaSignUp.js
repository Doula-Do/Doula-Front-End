import React, {useContext, useState} from 'react';

import "./SignUpApplication.css"
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import { Button,Form, FormGroup, Label, Input, FormText} from 'reactstrap';



function DoulaSignUp () {

const [enterdoulaPassword, setenterdoulaPassword] = useState("")
// const [doulaTraining, setdoulaTraining] = useState("")
// const [certifiedDoula, setcertifiedDoula] = useState("")
// const [doulaC, setdoulaC] = useState("")
// const [doulaCs, setdoulaCs] = useState("")
// const [doulaprofileLink, setdoulaprofileLink] = useState("")

const {first_name, setfirst_Name, last_name, setlast_Name, email, setuserEmail, password, setconfirmPassword, contactNumber, setcontactNumber, medicaid, setMedicaid, gender, setgenderWm } = useContext(AppContext)

function handleSubmit(event) {
  event.preventDefault();

  const data = {
    first_name,
    last_name,
    password,
    email,
    gender, 
    medicaid,
  };

   fetch('http://localhost:8000/users/:id', {
     method: 'POST',
     headers: { "Content-Type" : "application/json" },
     body: JSON.stringify(data)
   }).then(() => {
     console.log('new post added')
   })
}


        return (
  <Form className="signUpForm">

    <FormGroup>
    <h1>
      Hey Doula!
    </h1>
  </FormGroup>
  <FormGroup>
    <Label>
      First Name:
    </Label>
    <Input
     value={first_name}
     onChange={(event)=>{
      setfirst_Name(event.target.value)
     }}
      id="FirstName"
      name="FirstName"
      placeholder="Type your first name"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label >
      Last Name:
    </Label>
    <Input
      value={last_name}
      onChange={(event)=>{
        setlast_Name(event.target.value)
      }}
      id="LastName"
      name="LastName"
      placeholder="Type your last name"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label >
      Gender:
    </Label>
    <Input
    value={gender}
    onChange={(event)=>{
      setgenderWm(event.target.value)}}
      id="GenderSelect"
      name="select"
      type="select"
    >
      <option>
        Woman
      </option>
      <option>
        Man
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label >
      Email:
    </Label>
    <Input
     value={email}
     onChange={(event)=>{
      setuserEmail(event.target.value)
     }}
      id="Email"
      name="email"
      placeholder="Type your Email"
      type="email"
    />
  </FormGroup>
  
  <FormGroup>
    <Label >
      Enter Password:
    </Label>
    <Input
     value={enterdoulaPassword}
     onChange={(event)=>{
       setenterdoulaPassword(event.target.value)
     }}
      id="enterPassword"
      name="password"
      placeholder="Enter password"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label >
      Confirm Password:
    </Label>
    <Input
     value={password}
     onChange={(event)=>{
      setconfirmPassword(event.target.value)
     }}
      id="confirmdoulaPassword"
      name="password"
      placeholder="Re-Enter Password"
      type="password"
    />
  </FormGroup>
  {/* <FormGroup>
    <Label >
      Can you share a link to any of your social media profiles? linkedin, facebook, instagram...etc
    </Label>
    <Input
    value={doulaprofileLink}
    onChange={(event)=>{
      setdoulaprofileLink(event.target.value)
    }}
      id="doulaLink"
      name="url"
      placeholder="url placeholder"
      type="url"
    />
  </FormGroup> */}
  <FormGroup>
    <Label >
      Contact Number
    </Label>
    <Input
    value={contactNumber}
    onChange={(event)=>{
      setcontactNumber(event.target.value)
    }}
      id="contactNumber"
      name="contactNumber"
      placeholder="number placeholder"
      type="number"
    />
  </FormGroup>
  {/* <FormGroup>
    <Label >
      Date of Birth:
    </Label>
    <Input
     value={doulabirthday}
     onChange={(event)=>{
       setdoulabirthday(event.target.value)
     }}
      id="doulaBirth"
      name="date"
      placeholder="date placeholder"
      type="date"
    />
  </FormGroup> */}
  {/* <FormGroup>
    <Label >
      How long have you been a doula?
    </Label>
    <Input
    value={doulaexperience}
    onChange={(event)=>{
      setdoulaexperience(event.target.value)
    }}
      id="doulaExperience"
      name="select"
      type="select"
    >
      <option>
        less than 1 year
      </option>
      <option>
        3-5 years
      </option>
      <option>
        5-10years
      </option>
      <option>
        More than 10 years
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup> */}
  {/* <FormGroup>
    <Label>
      What type of Doula are you?
    </Label>
    <Input
    value={doulatype}
    onChange={(event)=>{
      setdoulatype(event.target.value)
    }}
      id="doulaType"
      name="select"
      type="select"
    >
      <option>
        Birthing Doula
      </option>
      <option>
        Postpartum Doula
      </option>
      <option>
        Community-based Doula
      </option>
    </Input>
  </FormGroup> */}
  {/* <FormGroup>
    <Label >
      Are you contracted or self-employed?
    </Label>
    <Input
      value={doulaCs}
      onChange={(event)=>{
        setdoulaCs(event.target.value)
      }}
      id="doulaCS"
      name="select"
      type="select"
    >
      <option>
        Contracted 
      </option>
      <option>
        Self-employed
      </option>
      <option>
        Both
      </option>
    </Input>
  </FormGroup> */}
 
      {/* <FormGroup>
    <Label >
      If contracted, what organization are you partnered with?
    </Label>
    <Input
     value={doulaC}
     onChange={(event)=>{
       setdoulaC(event.target.value)
     }}
      id="doulaC"
      name="select"
      type="select"
    >
      <option>
        Ancient Song Doula Services  
      </option>
      <option>
        Carribbean Women's Health Association
      </option>
      <option>
        Mama Glow Foundation
      </option>
      <option>
        By My Side Birth Support Program
      </option>
      <option>
        Hope and Healing Family Center
      </option>
      <option>
        Northern Manhattan Perinatal Partnership
      </option>
      <option>
        The Mothership
      </option>
      <option>
        Community Health Center of Richmond
      </option>
    </Input>
  </FormGroup> */}
     {/* <FormGroup>
    <Label >
      Are you certified in the state of New York City?
    </Label>
    <Input
     value={certifiedDoula}
     onChange={(event)=>{
       setcertifiedDoula(event.target.value)
     }}
      id="doulaCS"
      name="select"
      type="select"
    >
      <option>
        Yes 
      </option>
      <option>
        No
      </option>
    </Input>
  </FormGroup> */}
    {/* <FormGroup>
    <Label >
       Please upload your doula training certificate
    </Label>
    <Input
     value={doulaTraining}
     onChange={(event)=>{
       setdoulaTraining(event.target.value)
     }}
      id="doulatrainingFile"
      name="file"
      type="file"
    />
    </FormGroup> */}
    <FormGroup>
    <Label >
      Are you enrolled as a New York State Medicaid Provider?
    </Label>
    <Input
     value={medicaid}
     onChange={(event)=>{
      setMedicaid(event.target.value)
     }}
      id="medicaidDoula"
      name="select"
      type="select"
    >
      <option>
        Yes 
      </option>
      <option>
        No
      </option>
    </Input>
    </FormGroup>
  {/* <FormGroup>
    <Label >
      What do you specialize in as a Doula?(skills)
    </Label>
    <Input
     value={doulaSkills}
     onChange={(event)=>{
       setdoulaSkills(event.target.value)
     }}
  <FormText>
      id="doulaSkills"
      name="text"
      type="textarea"
    />
    </FormGroup> */}
    <br>
    </br>
  <FormText>
     Go connect with families/women who need your help!
    </FormText>
    <br>
    </br>
  <Button className="FamilyButton" onClick={handleSubmit} type="submit"><Link to="/signin">Submit</Link></ Button>
</Form>
        )
    }

            


export default DoulaSignUp;




{/* <FormGroup>
    <h1>
      Hey Doula!
    </h1>
  </FormGroup>
  <FormGroup>
    <Label for="FirstName">
      First Name:
    </Label>
    <Input
     value={doulafirstName}
     onChange={(event)=>{
       doulasetfirstName(event.target.value)
     }}
      id="FirstName"
      name="FirstName"
      placeholder="Type your first name"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="LastName">
      Last Name:
    </Label>
    <Input
      value={doulalastName}
      onChange={(event)=>{
        doulasetlastName(event.target.value)
      }}
      id="LastName"
      name="LastName"
      placeholder="Type your last name"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="Email">
      Email:
    </Label>
    <Input
     value={doulaemail}
     onChange={(event)=>{
       doulasetEmail(event.target.value)
     }}
      id="Email"
      name="email"
      placeholder="Type your Email"
      type="email"
    />
  </FormGroup>
  
  <FormGroup>
    <Label for="enterPassword">
      Enter Password:
    </Label>
    <Input
     value={enterdoulaPassword}
     onChange={(event)=>{
       setenterdoulaPassword(event.target.value)
     }}
      id="enterPassword"
      name="password"
      placeholder="Enter password"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="confirmdoulaPassword">
      Confirm Password:
    </Label>
    <Input
     value={confirmdoulaPassword}
     onChange={(event)=>{
       setconfirmdoulaPassword(event.target.value)
     }}
      id="confirmdoulaPassword"
      name="password"
      placeholder="Re-Enter Password"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="doulaLink">
      Can you share a link to any of your social media profiles? linkedin, facebook, instagram...etc
    </Label>
    <Input
    value={doulaprofileLink}
    onChange={(event)=>{
      setdoulaprofileLink(event.target.value)
    }}
      id="doulaLink"
      name="url"
      placeholder="url placeholder"
      type="url"
    />
  </FormGroup>
  <FormGroup>
    <Label for="contactNumber">
      Contact Number
    </Label>
    <Input
    value={doulacontactNumber}
    onChange={(event)=>{
      setdoulacontactNumber(event.target.value)
    }}
      id="contactNumber"
      name="contactNumber"
      placeholder="number placeholder"
      type="number"
    />
  </FormGroup>
  <FormGroup>
    <Label for="doulaBirth">
      Date of Birth:
    </Label>
    <Input
     value={doulabirthday}
     onChange={(event)=>{
       setdoulabirthday(event.target.value)
     }}
      id="doulaBirth"
      name="date"
      placeholder="date placeholder"
      type="date"
    />
  </FormGroup>
  <FormGroup>
    <Label for="doulaExperience">
      How long have you been a doula?
    </Label>
    <Input
    value={doulaexperience}
    onChange={(event)=>{
      setdoulaexperience(event.target.value)
    }}
      id="doulaExperience"
      name="select"
      type="select"
    >
      <option>
        less than 1 year
      </option>
      <option>
        3-5 years
      </option>
      <option>
        5-10years
      </option>
      <option>
        More than 10 years
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="doulaType">
      What type of Doula are you?
    </Label>
    <Input
    value={doulatype}
    onChange={(event)=>{
      setdoulatype(event.target.value)
    }}
      id="doulaType"
      name="select"
      type="select"
    >
      <option>
        Birthing Doula
      </option>
      <option>
        Postpartum Doula
      </option>
      <option>
        Community-based Doula
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="doulaCS">
      Are you contracted or self-employed?
    </Label>
    <Input
      value={doulaCs}
      onChange={(event)=>{
        setdoulaCs(event.target.value)
      }}
      id="doulaCS"
      name="select"
      type="select"
    >
      <option>
        Contracted 
      </option>
      <option>
        Self-employed
      </option>
      <option>
        Both
      </option>
    </Input>
  </FormGroup>
 
 */}