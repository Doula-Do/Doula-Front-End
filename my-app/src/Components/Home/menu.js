import AppContext from "../../context/AppContext";
import { useContext } from "react";
import About from "./about";
import { Link } from "react-router-dom";

function Menu(props) {
  const {user} = useContext(AppContext);
  const userId = user.id;
  return (
    <div className="card-body user-profile-card mb-3">
      <Link to={'/'}><button className="btn w-50 mx-auto fw-bold modalButton">Home</button></Link>
      <br></br>
      <Link to={`/user/${userId}`}><button className="btn w-50 mx-auto fw-bold modalButton my-3">Profile</button></Link>
    </div>
  );
}

export default Menu;
