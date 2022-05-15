function PostForm() {
  return (
    <form>
      <div className="post">
        <textarea
          className="form-control"
          placeholder="Write something.."
          rows="4"
        ></textarea>
        <div className="post-options">
          <button className="btn btn-outline-primary postButton">Post</button>
        </div>
      </div>
    </form>
  );
}

export default PostForm;