import Navbar from "../navbar/Navbar";
import Menu from "../Home/menu";
import SearchBar from "./searchBar";
import AppContext from "../../context/AppContext";
import { useContext, useEffect, useState, useRef } from "react";
import { Navigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import { DateTime } from "luxon";
import "../Home/home.css";
import "./chatUser.css";

const socket = io.connect("http://localhost:8000");

function ChatUser() {
  const { isAuth, user } = useContext(AppContext);
  const { id } = useParams();
  const [receiver, setReceiver] = useState({});
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  async function getChatData() {
    const response = await fetch(
      `http://localhost:8000/user/${user.id}/chat/${id}`
    );
    const data = await response.json();
    setMessages(data);
  }

  async function getReceiverData() {
    const response = await fetch(`http://localhost:8000/user/${id}`);
    const data = await response.json();
    setReceiver(data[0]);
  }

  useEffect(() => {
    if (!id) return;
    getChatData();
    getReceiverData();
  }, [id]);

  useEffect(() => {
    socket.on("receive_message", (payload) => {
      getChatData();
    });
  }, [socket]);

  function handleChatInput(e) {
    setChatInput(e.target.value);
  }

  function handleChatPost(e) {
    e.preventDefault();
    if (chatInput.length === 0) return;
    async function chatPost() {
      const response = await fetch(
        `http://localhost:8000/user/${user.id}/chat/${receiver.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: chatInput }),
        }
      );
      const data = await response.json();
      setMessages([...messages, data[0]]);
    }

    chatPost();
    socket.emit("chat", "message");
    setChatInput("");
  }

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);


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
                    style={{ position: "relative", height: "400px", overflowY: "auto" }}
                  >
                    {messages.length > 0 &&
                      messages.map((message) => (
                        <div
                          className={`d-flex flex-row justify-content-${
                            +message.sender_id === +user.id ? "end" : "start"
                          } mb-4`}
                        >
                          <div>
                            <p
                              className={`small p-2 me-3 mb-1 text-${
                                +message.sender_id === +user.id
                                  ? "black"
                                  : "dark"
                              } rounded-3`}
                              style={{
                                backgroundColor:
                                  +message.sender_id === +user.id
                                    ? "#9bbca9"
                                    : "#e4e6eb",
                              }}
                            >
                              {message.message}
                            </p>
                            <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                              {DateTime.fromISO(
                                message.created_at
                              ).toRelative()}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef}></div>
                  </div>
                  <hr></hr>
                  <div className="text-muted p-3">
                    <form onSubmit={handleChatPost}>
                      <div className="post">
                        <textarea
                          className="form-control"
                          placeholder="What's on your mind?"
                          rows="4"
                          value={chatInput}
                          onChange={handleChatInput}
                        ></textarea>
                        <div className="post-options">
                          <button className="btn btn-outline-primary postButton">
                            Post
                          </button>
                        </div>
                      </div>
                    </form>
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
