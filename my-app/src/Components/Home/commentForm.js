function CommentForm(props) {
  return (
    <form>
      <textarea
        className="form-control"
        placeholder="What's on your mind?"
      ></textarea>
      <div className="post-options">
        <button className="btn btn-outline-primary postButton">Post</button>
      </div>
    </form>
  );
}

export default CommentForm;