import CommentForm from "./commentForm";
import Comments from "./comments";
import Dropdown from './dropdown';
import { DateTime } from "luxon";

function Post(props) {
  const post = props.p;
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
                {post.first_name} {post.last_name}
                <br></br>
                <small>{DateTime.fromISO(post.created_at).toRelative()}</small>
              </p>
            </div>
            <Dropdown postid={post.id}/>
          </div>
          <div className="timeline-item-post">
            <p>{post.content}</p>
            <div className="timeline-options">
              <a href="#">
                <i className="fa fa-comment"></i> Comment (4)
              </a>
            </div>
            <Comments />
            <CommentForm />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Post;
