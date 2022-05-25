import AppContext from "../../context/AppContext";
import { useContext } from "react";
import About from "./about";
import { Link, useNavigate } from "react-router-dom";

function Menu(props) {
  const {user, setUser, setIsAuth} = useContext(AppContext);
  const userId = user.id;
  const navigate = useNavigate();

  function logout() {
    setUser({});
    window.localStorage.clear();
    setIsAuth(false);
    navigate('/');
  }

  return (
    <div className="card-body user-profile-card mb-3">
      <br></br>
      <Link to={'/'}><button className="btn w-50 mx-auto fw-bold modalButton">Home</button></Link>
      <br></br>
      <Link to={`/user/${userId}`}><button className="btn w-50 mx-auto fw-bold modalButton my-3">Profile</button></Link>
      <br></br>
      <button className="btn w-50 mx-auto fw-bold modalButton">Messages</button>
      <br></br>
      <button className="btn w-50 mx-auto fw-bold modalButton my-3" onClick={logout}>Log Out</button>
    </div>
  );
}

export default Menu;
