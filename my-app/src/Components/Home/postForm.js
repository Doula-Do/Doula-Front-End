import AppContext from "../../context/AppContext";
import { useContext } from "react";

function PostForm() {
  const {postInput, setpostInput, posts, setPosts} = useContext(AppContext);

  function handleInput(e) {
    setpostInput(e.target.value);
  }

  function handlePost(e) {
    e.preventDefault()
    async function createNewPost() {
      const response = await fetch('http://localhost:8000/post', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 3,
        content: postInput
      })
    })
     const data = await response.json();
     data.post[0].first_name = "Andrew"
     data.post[0].last_name = "Enoe"
     setPosts([data.post[0], ...posts]);
    }
    createNewPost();
    setpostInput("");
  }

  return (
    <form onSubmit={handlePost}>
      <div className="post">
        <textarea
          className="form-control"
          placeholder="What's on your mind?"
          rows="4"
          value={postInput}
          onChange={handleInput}
        ></textarea>
        <div className="post-options">
          <button className="btn btn-outline-primary postButton">Post</button>
        </div>
      </div>
    </form>
  );
}

export default PostForm;