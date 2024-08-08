import "./App.css";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/project" element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
