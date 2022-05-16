import React from 'react';
import "./SignUpApplication.css"
import { Button,Form, FormGroup, Label, Input,FormText} from 'reactstrap';



class FamilySignUp extends React.Component {
//      constructor (props){
//         super(props)

// }
    render(){
       
        return (
  <Form className="SignUpForm">
  <FormGroup>
    <h1>
      Hey Family!
    </h1>
  </FormGroup>
  <FormGroup>
    <Label for="FirstName">
      First Name:
    </Label>
    <Input
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
      id="Email"
      name="email"
      placeholder="Type your Email"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="PartnerFirstName">
      Partner First Name (Optional):
    </Label>
    <Input
      id="PartnerFirstName"
      name="FirstName"
      placeholder="Type your Partner's first name"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="PartnerLastName">
      Partner Last Name (Optional):
    </Label>
    <Input
      id="PartnerLastName"
      name="PartnerLastName"
      placeholder="Type your Partner's last name"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="EnterPassword">
      Enter Password:
    </Label>
    <Input
      id="EnterPassword"
      name="password"
      placeholder="Enter password"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="ConfirmPassword">
      Confirm Password:
    </Label>
    <Input
      id="ConfirmPassword"
      name="password"
      placeholder="Re-Enter Password"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="GenderSelect">
      Gender:
    </Label>
    <Input
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
    <Label for="medicaidSelect">
     Do you have medicaid?
    </Label>
    <Input
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
  <FormGroup>
    <Label for="medicaidSelect">
    Do you have a Doula?
    </Label>
    <Input
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
  <FormGroup>
    <Label for="ContactNumber">
      Contact Number:
    </Label>
    <Input
      id="ContactNumber"
      name="number"
      placeholder="number placeholder"
      type="number"
    />
  </FormGroup>
  <FormGroup>
    <Label for="BirthdayDate">
      Date of Birth:
    </Label>
    <Input
      id="BirthDayDate"
      name="date"
      placeholder="date placeholder"
      type="date"
    />
  </FormGroup>
  
  <FormGroup>
    <Label for="exampleSelect">
       ZipCode:
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        11203
      </option>
      <option>
        11206
      </option>
      <option>
        11205
      </option>
      <option>
        11236
      </option>
      <option>
      10030
      </option>
    </Input>
  </FormGroup>
    <FormText>
     You are almost Done, one more page to fill out!
    </FormText>
  <Button className="FamilyButton" type="submit"> Next </ Button>
  
</Form>
        )
    }
}
            


export default FamilySignUp