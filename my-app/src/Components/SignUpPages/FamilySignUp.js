import {useState, useContext} from 'react';
import "./SignUpApplication.css"
import { Button,Form, FormGroup, Label, Input,FormText} from 'reactstrap';
import AppContext from '../../context/AppContext'
// import { Link } from 'react-router-dom'


function FamilySignUp (){
const [enterPassword, setenterPassword] = useState("")
const [partnerfirstName, setpartnerfirstName] = useState("")
const [partnerlastName, setpartnerlastName] = useState("")
// const [familyZipcode, setfamilyZipcode] = useState("")
// const [birthday, setBirthday] = useState("")
// const [doulaYn, setdoulaYn] = useState("")
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
  <Form className='signUpForm' >
  <FormGroup>
    <h1>
      Hey Family!
    </h1>
  </FormGroup>
  <FormGroup>
    <Label >
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
      Partner First Name (Optional):
    </Label>
    <Input
      value={partnerfirstName}
      onChange={(event)=>{
        setpartnerfirstName(event.target.value)
      }}
      id="PartnerFirstName"
      name="FirstName"
      placeholder="Type your Partner's first name"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label >
      Partner Last Name (Optional):
    </Label>
    <Input
      value={partnerlastName}
      onChange={(event)=>{
        setpartnerlastName(event.target.value)
      }}
      id="PartnerLastName"
      name="PartnerLastName"
      placeholder="Type your Partner's last name"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label >
      Enter Password:
    </Label>
    <Input
       value={enterPassword}
       onChange={(event)=>{
         setenterPassword(event.target.value)}}
      id="EnterPassword"
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
      setconfirmPassword(event.target.value)}}
      id="ConfirmPassword"
      name="password"
      placeholder="Re-Enter Password"
      type="password"
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
     Do you have medicaid?
    </Label>
    <Input
    value={medicaid}
    onChange={(event)=>{
      setMedicaid(event.target.value)}}
      id="medicaidSelect"
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
    <Label for="DoulaYN">
    Do you have a Doula?
    </Label>
    <Input
    value={doulaYn}
    onChange={(event)=>{
      setdoulaYn(event.target.value)}}
      id="DoulaYN"
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
  <FormGroup>
    <Label >
      Contact Number:
    </Label>
    <Input
    value={contactNumber}
    onChange={(event)=>{
      setcontactNumber(event.target.value)}}
      id="ContactNumber"
      name="number"
      placeholder="number placeholder"
      type="number"
    />
  </FormGroup>
  {/* <FormGroup>
    <Label for="BirthdayDate">
      Date of Birth:
    </Label>
    <Input
    value={birthday}
    onChange={(event)=>{
      setBirthday(event.target.value)}}
      id="BirthDayDate"
      name="date"
      placeholder="date placeholder"
      type="date"
    />
  </FormGroup> */}
  {/* <FormGroup>
    <Label for="FamilyZipCode">
    ZipCode:
    </Label>
    <Input
    value={familyZipcode}
    onChange={(event)=>{
      setfamilyZipcode(event.target.value)}}
      id="FamilyZipCode"
      name="FamilyZipCode"
      placeholder="FamilyZipCode"
      type="FamilyZipCode"
    />
  </FormGroup> */}
    <FormText>
     You're All Done!
    </FormText>
  <Button className="FamilyButton" onClick={handleSubmit}type="submit">Submit</ Button>
  
</Form>
        )
    }

            


export default FamilySignUp