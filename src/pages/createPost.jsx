function CreatePost() {
  return (
    <>
    
      <main className="col-xs-12 col-sm-9 col-md-10 p-4">
        <h2>Send Post</h2>
        <form class="row g-3" method="Post">
          <div class="col-md-6">
            <label for="posttext" class="form-label">
              Post Text
            </label>
            <input type="text" class="form-control" id="posttext" />
          </div>
          <div class="col-md-6">
            <label for="file" class="form-label">
              Password
            </label>
            <input type="file" class="form-control" id="file" />
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Send Post
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
export default CreatePost;
