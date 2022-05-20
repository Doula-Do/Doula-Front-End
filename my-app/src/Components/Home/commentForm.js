import AppContext from "../../context/AppContext";
import { useContext, useState } from "react";

function CommentForm(props) {
  const {user} = useContext(AppContext);
  const [commentInput, setCommentInput] = useState("");
  const postId = props.data.p.id;
  const userId = user.id;

  function handleCommentInput(e) {
    setCommentInput(e.target.value);
  };

  function handleComment(e) {
    e.preventDefault();
    async function createNewComment() {
      const response = await fetch(`http://localhost:8000/post/${postId}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          content: commentInput
        }),
      })
        const data = await response.json();
        data[0].first_name = user.first_name;
        data[0].last_name = user.last_name;
        props.setComments((prevState) => ([...prevState, data[0]]));
    }
    createNewComment();
    setCommentInput("");
  }

  return (
    <form onSubmit={handleComment}>
      <textarea
        className="form-control"
        placeholder="What's on your mind?"
        value={commentInput}
        onChange={handleCommentInput}
      ></textarea>
      <div className="post-options">
        <button className="btn btn-outline-primary postButton">Post</button>
      </div>
    </form>
  );
}

export default CommentForm;