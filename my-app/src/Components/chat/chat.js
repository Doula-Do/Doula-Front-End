import Navbar from "../navbar/Navbar";
import Menu from "../Home/menu";
import SearchBar from "./searchBar";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import "../Home/home.css";

function ChatRoom() {
  const { isAuth } = useContext(AppContext);

  return !isAuth ? (
    <Navigate to="/" />
  ) : (
    <div>
      <Navbar />
      <div className="page-inner no-page-title pageContainer">
        {/* <!-- start page main wrapper --> */}
        <div id="main-wrapper">
          <div className="row">
            <div className="col-lg-5 col-xl-3">
              <div className="card card-white grid-margin">
                <div className="card-heading clearfix">
                  <h4 className="card-title text-center">Menu</h4>
                </div>
                <Menu />
              </div>
            </div>
            <div className="col-lg-7 col-xl-6">
              <div className="card card-white grid-margin">
                <div className="card-body d-flex flex-column mx-auto">
                    <img style={{height: "550px"}} src="https://i.pinimg.com/originals/77/20/49/7720496b8ba8593ebe575a580d5ba745.jpg"/>
                    <h2 className="my-2">Click a User or Doula to Connect With</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-3">
              <SearchBar />
            </div>
          </div>
          {/* <!-- Row --> */}
        </div>
        {/* <!-- end page main wrapper --> */}
      </div>
    </div>
  );
}

export default ChatRoom;
