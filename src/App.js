import "./App.css";
import Genre from "./Components/Genre/Genre";
import Movies from "./Components/Movies/Movies";

function App() {
  return (
    <div className="App ">
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <Genre />
          </div>
          <div className="col-6">
            <Movies />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
