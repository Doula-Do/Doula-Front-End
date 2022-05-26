import Navbar from "../navbar/Navbar";
import Menu from "../Home/menu";
import Post from "../Home/post";
import "../Home/home.css";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import ConnectedDoulas from "../Home/doulasConnected";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import "./profile.css";

function UserProfile() {
  const { user, isAuth } = useContext(AppContext);
  const [profileUser, setprofileUser] = useState({});
  const [profilePosts, setprofilePosts] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [medicaid, setMedicaid] = useState("No");
  const [doulaSkillSet, setDoulaSkillSet] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (!user.id) return;
    fetch(`http://localhost:8000/user/${id}`)
      .then((response) => response.json())
      .then((data) => setprofileUser({ ...data[0] }));

    fetch("http://localhost:8000/posts")
      .then((response) => response.json())
      .then((data) =>
        setprofilePosts(data.data.filter((post) => post.user_id === +id))
      );
  }, [id]);

  function handleEdit() {
    const currId = id;

    const newUserInfo = {
      first_name: firstName,
      last_name: lastName,
      birthday,
      phone_number: phoneNumber,
      medicaid,
      email : profileUser.email,
      doula_skillset: doulaSkillSet,
    };

    if (newUserInfo.first_name === "") newUserInfo.first_name = profileUser.first_name;
    if (newUserInfo.last_name === "") newUserInfo.last_name = profileUser.last_name;
    if (newUserInfo.medicaid === "Yes") {
      newUserInfo.medicaid = true;
    } else newUserInfo.medicaid = false;

    async function editProfile() {
      const response = await fetch(`http://localhost:8000/user/${currId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUserInfo),
      });
    }

    editProfile();
    setprofileUser({...profileUser, ...newUserInfo});
    setFirstName("");
    setLastName("");
    setBirthday("");
    setPhoneNumber("");
    setMedicaid("");
    setDoulaSkillSet("");
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
              <div className="panel">
                <div className="bio-graph-heading">
                  {profileUser.is_doula && (
                    <>
                      <img className="profilePic" src="https://thumbs.dreamstime.com/b/midwife-sign-icon-hands-hand-drawn-logo-symbol-t-shirt-prints-online-marketing-midwife-sign-icon-hands-153017040.jpg"/>
                      <h2>Doula Profile</h2>
                    </>
                  )}
                  {!profileUser.is_doula && (
                    <>
                    <img className="profilePic" src="https://thumbs.dreamstime.com/b/beautiful-pregnant-woman-shapes-sketch-illustration-portrait-young-belly-silhouette-173512778.jpg"/>
                      <h2>User Profile</h2>
                    </>
                  )}
                  {+profileUser.id === +user.id && (
                    <>
                      <EditIcon
                        className="edit"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </>
                  )}
                </div>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Edit Post
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        First Name
                        <textarea
                          className="form-control"
                          rows="1"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        ></textarea>
                        Last Name
                        <textarea
                          className="form-control"
                          rows="1"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        ></textarea>
                        Birthday
                        <textarea
                          className="form-control"
                          rows="1"
                          value={birthday}
                          onChange={(e) => setBirthday(e.target.value)}
                        ></textarea>
                        Phone Number
                        <textarea
                          className="form-control"
                          rows="1"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        ></textarea>
                        Medicaid
                        <textarea
                          className="form-control"
                          rows="1"
                          value={medicaid}
                          onChange={(e) => setMedicaid(e.target.value)}
                        ></textarea>
                        {profileUser.is_doula === true && (
                          <>
                            Doula Skillset
                            <textarea
                              className="form-control"
                              rows="1"
                              value={doulaSkillSet}
                              onChange={(e) => setDoulaSkillSet(e.target.value)}
                            ></textarea>
                          </>
                        )}
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary modalButton"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary modalButton"
                          data-bs-dismiss="modal"
                          onClick={handleEdit}
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-body bio-graph-info">
                  <div className="row">
                    <div className="bio-row">
                      <p>
                        <span>First Name </span>: {profileUser.first_name}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Last Name </span>: {profileUser.last_name}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Birthday </span>: {!profileUser.birthday && (<>N/A</>)}{" "}{profileUser.birthday}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Number</span>:{" "}
                        {!profileUser.phone_number && <>N/A</>}{" "}
                        {profileUser.phone_number > 0 && (
                          <>{profileUser.phone_number}</>
                        )}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Medicaid </span>:{" "}
                        {profileUser.medicaid === true && <>Yes</>}{" "}
                        {profileUser.medicaid === false && <>No</>}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Email </span>: {profileUser.email}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Gender </span>: {profileUser.gender}
                      </p>
                    </div>
                    {profileUser.is_doula && (
                      <>
                        <div className="bio-row">
                          <p>
                            <span>Doula Skillset </span>:{" "}
                            {!profileUser.doula_skillset && (<>N/A</>)}{" "}{profileUser.doula_skillset}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="profile-timeline">
                <ul className="list-unstyled">
                  {profilePosts.length > 0 &&
                    profilePosts.map((data) => <Post p={data} key={data.id} />)}
                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-xl-3">
              <ConnectedDoulas />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
