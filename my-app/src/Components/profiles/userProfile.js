import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import Menu from "../Home/menu";
import Post from "../Home/post";
import "../Home/home.css";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import ConnectedDoulas from "../Home/doulasConnected";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileForm from "./profileForm";
import "./profile.css";

function UserProfile() {
  const { user } = useContext(AppContext);
  const [profileUser, setprofileUser] = useState({});
  const [profilePosts, setprofilePosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/user/${id}`)
      .then((response) => response.json())
      .then((data) => setprofileUser({ ...data[0] }));

    fetch("http://localhost:8000/posts")
      .then((response) => response.json())
      .then((data) =>
        setprofilePosts(data.data.filter((post) => post.user_id === +id))
      );
  }, [id]);

  return (
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
              <div className="panel">
                <div className="bio-graph-heading">
                  {profileUser.is_doula && (
                    <>
                      <h2>Doula Profile</h2>
                    </>
                  )}
                  {!profileUser.is_doula && (
                    <>
                      <h2>User Profile</h2>
                    </>
                  )}
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
                        <span>Birthday </span>: {profileUser.birthday}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Number</span>: {profileUser.phone_number}
                      </p>
                    </div>
                    <div className="bio-row">
                      <p>
                        <span>Medicaid </span>: {profileUser.medicaid === true && (<>Yes</>)} {profileUser.medicaid === false && (<>No</>)}
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
                            <span>Doula Skillset </span>: {profileUser.doula_skillset}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {user.id === +id && (
                <>
                  <div className="card card-white grid-margin">
                    <div className="card-body">
                      <ProfileForm
                        setprofilePosts={setprofilePosts}
                        profilePosts={profilePosts}
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="profile-timeline">
                <ul className="list-unstyled">
                  {profilePosts.length > 0 &&
                    profilePosts.map((data) => (
                      <Post
                        p={data}
                        key={data.id}
                        profileId={id}
                        profilePosts={profilePosts}
                        setprofilePosts={setprofilePosts}
                      />
                    ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-xl-3">
              <ConnectedDoulas />
            </div>
          </div>
          {/* <!-- Row --> */}
        </div>
        {/* <!-- end page main wrapper --> */}
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
