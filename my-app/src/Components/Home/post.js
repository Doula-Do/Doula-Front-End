import CommentForm from "./commentForm";
import Comments from "./comments";
import Dropdown from "./dropdown";
import { DateTime } from "luxon";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Post(props) {
  const [showComments, setShowComments] = useState(false);
  const { user, comments, setComments } = useContext(AppContext);
  const post = props.p;
  const postComments = comments.filter(
    (comment) => post.id === comment.post_id
  );
  const userPostedId = post.user_id;

  function handleToggle() {
    setShowComments(!showComments);
  }

  return (
    <li className="timeline-item">
      <div className="card card-white grid-margin">
        <div className="card-body">
          <div className="timelineHeader">
            <div className="timeline-item-header timelineHeader">
              {post.is_doula && (
                <>
                  <img
                    src="https://thumbs.dreamstime.com/b/midwife-sign-icon-hands-hand-drawn-logo-symbol-t-shirt-prints-online-marketing-midwife-sign-icon-hands-153017040.jpg"
                    alt=""
                  />
                </>
              )}
              {!post.is_doula && (
                <>
                  <img
                    src="https://thumbs.dreamstime.com/b/beautiful-pregnant-woman-shapes-sketch-illustration-portrait-young-belly-silhouette-173512778.jpg"
                    alt=""
                  />
                </>
              )}
              <pre>
                <Link to={`/user/${userPostedId}`}>
                  <p>                 
                    {post.first_name} {post.last_name} {post.is_doula && (<>&#10004;</>)}
                  </p>
                </Link>
                <small>{DateTime.fromISO(post.created_at).toRelative()}</small>
              </pre>
            </div>
            {+user.id === +post.user_id && <Dropdown postid={post.id} profileId={props.profileId} profilePosts={props.profilePosts} setprofilePosts={props.setprofilePosts} />}
          </div>
          <div className="timeline-item-post">
            <p>{post.content}</p>
            <div className="timeline-options">
              {postComments.length > 0 && (
                <button className="mx-1 btn" onClick={handleToggle}>
                  <i className="fa fa-comment"></i> Comment (
                  {postComments.length})
                </button>
              )}
            </div>
            {showComments && (
              <>
                {comments.length > 0 && (
                  <>
                    {postComments.map((comment) => (
                      <Comments
                        data={comment}
                        comments={comments}
                        setComments={setComments}
                      />
                    ))}
                  </>
                )}
              </>
            )}
            <CommentForm data={props} setComments={setComments} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Post;
