import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Bottombar from "./components/Bottombar";
import "./App.css";
function App() {
  return (
    <div>
      <div className="topHeading">
        <h1>Buy Cars</h1>
      </div>
      <Navbar />
      <Cards />
      <Bottombar />
    </div>
  );
}

export default App;
