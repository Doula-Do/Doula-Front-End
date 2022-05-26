import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";


function SearchBar() {
  const { user } = useContext(AppContext);
  const [users, setUsers] = useState([]);
  const [doulas, setDoulas] = useState([]);
    
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) =>
        setUsers(data.data.filter((people) => (people.id !== +user.id && people.is_doula === false)))
      );

      fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) =>
        setDoulas(data.data.filter((people) => people.is_doula === true))
      );
  }, []);

  return (
    <div className="card card-white grid-margin text-center mx-auto">
      <div className="card-heading clearfix">
        <h4 className="card-title">Users</h4>
      </div>
      <div className="card-body">
        <ul>
            {users.map(person =><li><Link className="recommendedNames" to={`/chat/${person.id}`}><button className="btn w-50 mx-auto fw-bold modalButton">{person.first_name} {person.last_name}</button></Link></li>)}
        </ul>
      </div>
      <hr />
      <div className="card-heading clearfix">
        <h4 className="card-title">Doulas</h4>
      </div>
      <div className="card-body">
        <ul>
            {doulas.map(person =><li><Link className="recommendedNames" to={`/chat/${person.id}`}><button className="btn w-50 mx-auto fw-bold modalButton">{person.first_name} {person.last_name}</button></Link></li>)}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;