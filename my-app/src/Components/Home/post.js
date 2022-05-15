import CommentForm from "./commentForm";
import Comments from "./comments";

function Post(props) {
  return (
    <li className="timeline-item">
      <div className="card card-white grid-margin">
        <div className="card-body">
          <div className="timeline-item-header">
            <img
              src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
              alt=""
            />
            <p>
              Vikash smith <span>posted a status</span>
            </p>
            <small>3 hours ago</small>
          </div>
          <div className="timeline-item-post">
            <p>
              Elavita veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur.
            </p>
            <div className="timeline-options">
              <a href="#">
                <i className="fa fa-thumbs-up"></i> Like (15)
              </a>
              <a href="#">
                <i className="fa fa-comment"></i> Comment (4)
              </a>
            </div>
            <Comments />
            <Comments />
            <CommentForm />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Post;