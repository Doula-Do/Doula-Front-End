import AppContext from "../../context/AppContext";
import { useContext } from "react";

function Dropdown(props) {
  const { posts, setPosts } = useContext(AppContext);

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
    const newPostFeed = posts.filter(post => post.id !== +postId);
    setPosts([...newPostFeed]);
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
          <option className="dropdown-item" href="#">
            Edit
          </option>
        </li>
        <li>
          <option onClick={handleDelete} className="dropdown-item" href="#">
            Delete
          </option>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
