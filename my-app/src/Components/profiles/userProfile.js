import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import ProfileCard from "../Home/menu";
import PostForm from "../Home/postForm";
import Post from "../Home/post";
import "../Home/home.css";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import ConnectedDoulas from "../Home/doulasConnected";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function UserProfile() {
  const { user } = useContext(AppContext);
  const [profilePosts, setprofilePosts] = useState([]);
  const [profileUser, setprofileUser] = useState({});
  const { id } = useParams();
  const userPosts = profilePosts.filter(post => post.user_id === +id);

    useEffect(() => {
        fetch(`http://localhost:8000/user/${id}`)
        .then(response => response.json())
        .then(data => setprofileUser({...data[0]}))

        fetch("http://localhost:8000/posts")
        .then(response => response.json())
        .then(data => setprofilePosts(data.data));
    }, []);

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
                <ProfileCard />
              </div>
            </div>
            <div className="col-lg-7 col-xl-6">
              {user.id === +id && (
                <>
                  <div className="card card-white grid-margin">
                    <div className="card-body">
                      <PostForm />
                    </div>
                  </div>
                </>
              )}
              <div className="profile-timeline">
                <ul className="list-unstyled">
                  {userPosts.length > 0 &&
                    userPosts.map((data) => <Post p={data} key={data.id}/>)}
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
