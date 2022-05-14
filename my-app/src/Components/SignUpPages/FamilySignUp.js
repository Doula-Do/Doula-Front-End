import React from 'react';
import "./SignUpApplication.css"
import { Button,Form, FormGroup, Label, Input,FormText} from 'reactstrap';



class FamilySignUp extends React.Component {
//      constructor (props){
//         super(props)

// }
    render(){
       
        return (
  <Form>
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
    <Label for="CreatePassword">
      Create Password
    </Label>
    <Input
      id="CreatePassword"
      name="password"
      placeholder="Enter password"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="ConfirmPassword">
      Create Password
    </Label>
    <Input
      id="ConfirmPassword"
      name="password"
      placeholder="Re-Enter Password"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleUrl">
      Url
    </Label>
    <Input
      id="exampleUrl"
      name="url"
      placeholder="url placeholder"
      type="url"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleNumber">
      Number
    </Label>
    <Input
      id="exampleNumber"
      name="number"
      placeholder="number placeholder"
      type="number"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleDatetime">
      Datetime
    </Label>
    <Input
      id="exampleDatetime"
      name="datetime"
      placeholder="datetime placeholder"
      type="datetime"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleDate">
      Date
    </Label>
    <Input
      id="exampleDate"
      name="date"
      placeholder="date placeholder"
      type="date"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleTime">
      Time
    </Label>
    <Input
      id="exampleTime"
      name="time"
      placeholder="time placeholder"
      type="time"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleColor">
      Color
    </Label>
    <Input
      id="exampleColor"
      name="color"
      placeholder="color placeholder"
      type="color"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSearch">
      Search
    </Label>
    <Input
      id="exampleSearch"
      name="search"
      placeholder="search placeholder"
      type="search"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Select
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelectMulti">
      Select Multiple
    </Label>
    <Input
      id="exampleSelectMulti"
      multiple
      name="selectMulti"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      Text Area
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleFile">
      File
    </Label>
    <Input
      id="exampleFile"
      name="file"
      type="file"
    />
    <FormText>
      This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
    </FormText>
  </FormGroup>
  <FormGroup>
    <Label for="exampleRange">
      Range
    </Label>
    <Input
      id="exampleRange"
      name="range"
      type="range"
    />
  </FormGroup>
  <FormGroup check>
    <Input type="radio" />
    {' '}Option one is this and that—be sure to
    <Label check>
      include why it's great
    </Label>
  </FormGroup>
  <FormGroup check>
    <Input type="checkbox" />
    <Label check>
      Check me out
    </Label>
  </FormGroup>
  <Button type="submit"> Next </ Button>
</Form>
        )
    }
}
            


export default FamilySignUp