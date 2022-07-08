import "./App.css";
import DetailsUserCard from "./components/DetailsUserCard/DetailsUserCard";
function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1 className="absolute-positon ">Rick and Morty Search</h1>
      </div>
      <DetailsUserCard />
    </div>
  );
}

export default App;
