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
                <div className="card-body mx-auto">
                    <img src="https://i.pinimg.com/originals/44/67/ce/4467ceda95866abb6e9060609fc81360.gif"/>
                    <h2 className="my-2">Click to connect!</h2>
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
