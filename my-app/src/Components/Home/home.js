import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import Menu from "./menu";
import PostForm from "./postForm";
import Post from "./post";
import "./home.css";
import AppContext from "../../context/AppContext";
import {useContext} from 'react';
import ConnectedDoulas from "./doulasConnected";
import {Navigate} from 'react-router-dom'


function Home() {
  const {posts, setPosts, user, isAuth} = useContext(AppContext);
  
  return !isAuth ? <Navigate to="/" /> : (
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
                  <div className="card-body">
                    <PostForm />
                  </div>
                </div>
                <div className="profile-timeline">
                  <ul className="list-unstyled">
                    {posts.length > 0 && 
                      posts.map((data) => <Post p={data} key={data.id}/>)
                    }
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

export default Home;
