import PostForm from "./components/PostForm.component";
import Posts from "./components/Posts.component";
import FetchedPosts from "./components/FetchedPosts.component";

function App() {
  return (
    <div className="container pt-3">
      <div className="row pb-2">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col">
          <h2>Sync</h2>
          <Posts/>
        </div>
        <div className="col">
          <h2>Async</h2>
          <FetchedPosts/>
        </div>
      </div>
    </div>
  );
}

export default App;
