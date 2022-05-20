import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import ProfileCard from "./profileCard";
import About from "./about";
import ContactInfo from "./contactInfo";
import PostForm from "./postForm";
import Post from "./post";
import ExtraInfo from "./extraInfo";
import "./home.css";
import { useEffect } from "react";
import AppContext from "../../context/AppContext";
import {useContext} from 'react';


function Home() {
  const {posts, setPosts} = useContext(AppContext);

  useEffect(() => {
    fetch("http://localhost:8000/posts")
    .then(response => response.json())
    .then(data => setPosts(data.data))
  },[])

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="page-inner no-page-title pageContainer">
          {/* <!-- start page main wrapper --> */}
          <div id="main-wrapper">
            <div className="row">
              <div className="col-lg-5 col-xl-3">
                <div className="card card-white grid-margin">
                  <div className="card-heading clearfix">
                    <h4 className="card-title text-center">User Profile</h4>
                  </div>
                  <ProfileCard />
                  {/* <ProfileCard obj={user}/> */}
                  <hr />
                  <div className="card-heading clearfix mt-3">
                    <h4 className="card-title text-center">About</h4>
                  </div>
                  <About />
                  {/* <About obj={user}/> */}
                  <hr />
                  <div className="card-heading clearfix mt-3">
                    <h4 className="card-title text-center">
                      Contact Information
                    </h4>
                  </div>
                  <ContactInfo />
                  {/* <ContactInfo obj={user}/> */}
                </div>
              </div>
              <div className="col-lg-7 col-xl-6">
                <div className="card card-white grid-margin">
                  <div className="card-body">
                    <PostForm />
                  </div>
                </div>
                <div className="profile-timeline">
                  <ul className="list-unstyled">
                    {posts.length > 0 && 
                      posts.map((data) => <Post p={data}/>)
                    }
                  </ul>
                </div>
              </div>
              <div className="col-lg-12 col-xl-3">
                <ExtraInfo />
              </div>
            </div>
            {/* <!-- Row --> */}
          </div>
          {/* <!-- end page main wrapper --> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
