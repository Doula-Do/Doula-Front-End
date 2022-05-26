import Navbar from "../navbar/Navbar";
import Menu from "../Home/menu";
import SearchBar from "./searchBar";
import AppContext from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import "../Home/home.css";
import "./chatUser.css";

function ChatUser() {
  const { isAuth, user } = useContext(AppContext);
  const { id } = useParams();
  const [receiver, setReceiver] = useState({});
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/user/${user.id}/chat/${id}`)
      .then((response) => response.json())
      .then((data) => setMessages(data));

    fetch(`http://localhost:8000/user/${id}`)
      .then((response) => response.json())
      .then((data) => setReceiver(data[0]));
  }, []);

  console.log(messages)

  function Receiver(props) {
    return (
      <div className="d-flex flex-row justify-content-start mb-4">
        <div>
          <p
            className="small p-2 ms-3 mb-1 rounded-3"
            style={{ "background-color": "#f5f6f7" }}
          >
            We will go on Sunday?
          </p>
          <p className="small ms-3 mb-3 rounded-3 text-muted">00:07</p>
        </div>
      </div>
    );
  }

  function Sender(props) {
      console.log(props)
    return (
      <div className="d-flex flex-row justify-content-end mb-4">
        <div>
          <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
            Is that okay?
          </p>
          <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
            00:09
          </p>
        </div>
      </div>
    );
  }

  return !isAuth ? (
    <Navigate to="/" />
  ) : (
    <div>
      <Navbar />
      <div className="page-inner no-page-title pageContainer">
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
              <div className="row d-flex justify-content-center chatContainer">
                <div className="card chat2">
                  <div className=" d-flex justify-content-between align-items-center p-3">
                    <h5 className="mb-0">
                      {receiver.first_name} {receiver.last_name}
                    </h5>
                  </div>
                  <div
                    className="card-body"
                    data-mdb-perfect-scrollbar="true"
                    // style={{ position: "relative", height: "400px" }}
                  >
                    {messages.map(message => {
                        {user.id === message.sender_id && (
                            <Sender data={message}/>
                        )}
                        {receiver.id === message.receiver_id && (
                            <Receiver data={message}/>
                        )}
                    })}
                    <Receiver />
                    <Sender />
                  </div>
                  <hr></hr>
                  <div className="text-muted d-flex justify-content-start align-items-center p-3">
                    {/* <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleFormControlInput1"
                      placeholder="Type message"
                    />
                    <a className="ms-1 text-muted" href="#!">
                      <i className="fas fa-paperclip"></i>
                    </a>
                    <a className="ms-3 text-muted" href="#!">
                      <i className="fas fa-smile"></i>
                    </a>
                    <a className="ms-3" href="#!">
                      <i className="fas fa-paper-plane"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-3">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatUser;
