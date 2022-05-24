import CommentForm from "./commentForm";
import Comments from "./comments";
import Dropdown from './dropdown';
import { DateTime } from "luxon";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Post(props) {
  const [showComments, setShowComments] = useState(false);
  const {user, comments, setComments} = useContext(AppContext);
  const post = props.p;
  const postComments = comments.filter(comment => post.id === comment.post_id);
  const userPostedId = post.user_id;

  function handleToggle() {
    setShowComments(!showComments);
  };

  return (
    <li className="timeline-item">
      <div className="card card-white grid-margin">
        <div className="card-body">
          <div className="timelineHeader">
            <div className="timeline-item-header timelineHeader">
              <img
                src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
                alt=""
              />
              <p>
                <Link to={`/user/${userPostedId}`}>{post.first_name} {post.last_name}</Link>
                <br></br>
                <small>{DateTime.fromISO(post.created_at).toRelative()}</small>
              </p>
            </div>
            {user.id === post.user_id && (
            <Dropdown postid={post.id}/>
            )}
          </div>
          <div className="timeline-item-post">
            <p>{post.content}</p>
            <div className="timeline-options">
              {postComments.length > 0 && (
                <button className="mx-1 btn" onClick={handleToggle}>
                <i className="fa fa-comment"></i> Comment ({postComments.length})
              </button>
              )}
            </div>
            {showComments && (
              <>
                {comments.length > 0 && (
                  <>
                    {postComments.map(comment => <Comments data={comment} comments={comments} setComments={setComments}/>)}
                  </>
                )}
              </>
            )}
            <CommentForm data={props} setComments={setComments}/>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Post;