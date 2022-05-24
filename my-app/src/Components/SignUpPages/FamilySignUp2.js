import React,  {useContext} from 'react';
import "./SignUpApplication.css"
import { Button,Form, FormGroup, Label, Input,FormText} from 'reactstrap';
import AppContext from '../../context/AppContext'
import { Link } from 'react-router-dom'

function FamilySignUpTwo (props) {
  const {interesteduserSelect, setinteresteduserSelect, preferenceusertextArea, setpreferenceusertextArea, dueDate, setdueDate,genderbabySelect, setgenderbabySelect,firstbabySelect, setfirstbabySelect} = useContext(AppContext)
  
  
           
            return (
      <Form className="signUpForm">
      <FormGroup>
        <h1>
          Hey Family!
        </h1>
      </FormGroup>
      <FormGroup>
    <Label for="interesteduserSelect">
    What type of Doula are you interested in?
    </Label>
    <Input
    value={interesteduserSelect}
    onChange={(event)=>{
      setinteresteduserSelect(event.target.value)
    }}
      id="interesteduserSelect"
      name="select"
      type="select"
    >
      <option>
        Birthing-Doula
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
        <Label for="preferenceusertextArea">
        Do you have any sprititual/birthing preference? waterbirth,homebirth...etc.
        </Label>
        <Input
         value={preferenceusertextArea}
         onChange={(event)=>{
           setpreferenceusertextArea(event.target.value)
         }}
          id="preferenceusertextArea"
          name="text"
          type="textarea"
        />
      </FormGroup>
      <FormGroup>
    <Label for="dueDate">
    When is your due date?
    </Label>
    <Input
     value={dueDate}
     onChange={(event)=>{
       setdueDate(event.target.value)
     }}
      id="dueDate"
      name="dueDate"
      placeholder="date placeholder"
      type="date"
    />
  </FormGroup>
  <FormGroup>
    <Label for="genderbabySelect">
    Do you know the gender of the baby?
    </Label>
    <Input
     value={genderbabySelect}
     onChange={(event)=>{
       setgenderbabySelect(event.target.value)
     }}
      id="genderbabySelect"
      name="genderSelect"
      type="select"
    >
      <option>
        Boy
      </option>
      <option>
        Girl
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="firstbabySelect">
    Is this your first time having a baby?
    </Label>
    <Input
     value={firstbabySelect}
     onChange={(event)=>{
       setfirstbabySelect(event.target.value)
     }}
      id="firstbabySelect"
      name="firstbabyselect"
      type="select"
    >
      <option>
        Yes
      </option>
      <option>
        No
      </option>
    </Input>
    <FormText>
     You're all done!
    </FormText>
    </FormGroup>
      <Button className="FamilyButton" type="submit"><Link to="/signin">Submit</Link></ Button>
    </Form>
            )
        }
    
                
    
    
    export default FamilySignUpTwo