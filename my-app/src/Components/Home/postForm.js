import AppContext from "../../context/AppContext";
import { useContext } from "react";

function PostForm() {
  const {postInput, setpostInput, posts, setPosts, user} = useContext(AppContext);
  
  function handleInput(e) {
    setpostInput(e.target.value);
  }

  async function handlePost(e) {
    e.preventDefault()
    async function createNewPost() {
      const response = await fetch('http://localhost:8000/post', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user.id,
        content: postInput
      })
    })
     const data = await response.json();
     data.post[0].first_name = user.first_name;
     data.post[0].last_name = user.last_name;
    //  setPosts([data.post[0], ...posts]);
    }
    await createNewPost();
    fetch("http://localhost:8000/posts")
    .then(response => response.json())
    .then(data => setPosts(data.data))
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