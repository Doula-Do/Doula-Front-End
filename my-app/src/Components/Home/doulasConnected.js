import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

function ConnectedDoulas() {
  const {user} = useContext(AppContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/users')
    .then(response => response.json())
    .then(data => setUsers(data.data.filter(people => people.id !== user.id)));
  }, [])

  return (
    <div className="card card-white grid-margin text-center">
      <div className="card-heading clearfix">
        <h4 className="card-title">Doulas Connected</h4>
      </div>
      <div className="card-body">
        <p>
        </p>
      </div>
      <hr />
      <div className="card-heading clearfix">
        <h4 className="card-title">Recommended Doulas</h4>
      </div>
      <div className="card-body">
        <ul>
          {users.map(user => <li><Link to={`/user/${user.id}`} className="recommendedNames">{user.first_name} {user.last_name}</Link></li>)}
        </ul>
      </div>
    </div>
  );
}

export default ConnectedDoulas;
