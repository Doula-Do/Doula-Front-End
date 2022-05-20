import { DateTime } from "luxon";
import DeleteIcon from "@mui/icons-material/Delete";
import AppContext from "../../context/AppContext";
import { useContext } from "react";

function Comments(props) {
  const { user } = useContext(AppContext);
  const userComments = props.data;
  console.log(userComments)

  function handleDeleteComment() {
    const commentId = userComments.id;
    async function deleteComment() {
      const response = await fetch(`http://localhost:8000/comment/${commentId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      });
    }

    deleteComment();
    const newComments = props.comments.filter(comment => commentId !== comment.id);
    props.setComments([...newComments]);
  }

  return (
    <div className="timeline-comment">
      <div className="timeline-comment-header">
        <img
          src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
          alt=""
        />
        <p>
          {userComments.first_name} {userComments.last_name} {" "}
          <small>
            {DateTime.fromISO(userComments.created_at).toRelative()}
          </small>
        </p>
        {user.id === userComments.user_id && (
          <>
            <button className="btn float-end" onClick={handleDeleteComment}>
              <DeleteIcon />
            </button>
          </>
        )}
      </div>
      <p className="timeline-comment-text">{userComments.content}</p>
    </div>
  );
}

export default Comments;
