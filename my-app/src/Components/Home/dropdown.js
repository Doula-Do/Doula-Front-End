import AppContext from "../../context/AppContext";
import { useContext } from "react";

function Dropdown(props) {
  const { posts, setPosts, currInput, setcurrInput } = useContext(AppContext);
  function handleDelete() {
    const postId = props.postid;
    async function deleteAPost(id) {
      const response = await fetch(`http://localhost:8000/post/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
    }

    deleteAPost(postId);
    const newPostFeed = posts.filter((post) => post.id !== +postId);
    setPosts([...newPostFeed]);
    const deletedPostFeed = props.profilePosts.filter(post => post.id !== +postId);
    props.setprofilePosts([...deletedPostFeed]);
  }

  function handleUpdatePost() {
    const postId = props.postid;
    async function updateAPost(id) {
      const response = await fetch(`http://localhost:8000/post/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: currInput
        })
      });
      const data = await response.json();
      const updatedContent = data.content;
      const foundPost = posts.findIndex(post => post.id === +id);
      posts[foundPost].content = updatedContent;
      setPosts([...posts]);
      const proFoundPost = props.profilePosts.findIndex(post => post.id === +id);
      props.profilePosts[proFoundPost].content = updatedContent;
      props.setprofilePosts([...props.profilePosts]);
    }
    
    updateAPost(postId);
  }

  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        ...
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <button
            type="button"
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Edit
          </button>
        </li>
        <li>
          <button onClick={handleDelete} className="dropdown-item" href="#">
            Delete
          </button>
        </li>
      </ul>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Post
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <textarea
                className="form-control"
                placeholder="What's on your mind?"
                rows="4"
                value={currInput}
                onChange={(e) => setcurrInput(e.target.value)}
              ></textarea>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary modalButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary modalButton"
                data-bs-dismiss="modal"
                onClick={handleUpdatePost}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
