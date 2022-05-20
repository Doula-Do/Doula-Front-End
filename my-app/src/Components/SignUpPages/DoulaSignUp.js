import React, {useContext, useState} from 'react';

import "./SignUpApplication.css"
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import { Button,Form, FormGroup, Label, Input, FormText} from 'reactstrap';



function DoulaSignUp () {

const [enterdoulaPassword, setenterdoulaPassword] = useState("")
const [doulaTraining, setdoulaTraining] = useState("")
const [certifiedDoula, setcertifiedDoula] = useState("")
const [doulaC, setdoulaC] = useState("")
const [doulaCs, setdoulaCs] = useState("")
const [doulaprofileLink, setdoulaprofileLink] = useState("")




const {doulafirstName, doulasetfirstName, doulalastName, doulasetlastName, doulaemail, doulasetEmail,confirmdoulaPassword, setconfirmdoulaPassword, medicaidDoula, setmedicaidDoula, doulaSkills, setdoulaSkills, doulacontactNumber,setdoulacontactNumber ,doulatype, setdoulatype,doulaexperience, setdoulaexperience, doulabirthday, setdoulabirthday} = useContext(AppContext)

// function onSubmit() => {
//   const fetchData = async () => {
//     const result = await fetch('')
//     const jsonResult= result.json();

//   }
// }

// const submitDoulaProfile = async () =>{
//   // const myData{

//   // }

//   const result = await fetch ('')
// }
       
        return (
  <Form className="signUpForm">
    <FormGroup>
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
 
      <FormGroup>
    <Label for="doulaC">
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
  </FormGroup>
     <FormGroup>
    <Label for="certifiedDoula">
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
  </FormGroup>
    <FormGroup>
    <Label for="doulatrainingFile">
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
    </FormGroup>
    <FormGroup>
    <Label for="medicaidDoula">
      Are you enrolled as a New York State Medicaid Provider?
    </Label>
    <Input
     value={medicaidDoula}
     onChange={(event)=>{
       setmedicaidDoula(event.target.value)
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
  <FormGroup>
    <Label for="doulaSkills">
      What do you specialize in as a Doula?(skills)
    </Label>
    <Input
     value={doulaSkills}
     onChange={(event)=>{
       setdoulaSkills(event.target.value)
     }}
      id="doulaSkills"
      name="text"
      type="textarea"
    />
    </FormGroup>
    <br>
    </br>
  <FormText>
     Go connect with families/women who need your help!
    </FormText>
    <br>
    </br>
  <Button className="FamilyButton" type="submit"><Link to="/signin">Submit</Link></ Button>
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