import "./App.css";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill" element={<Skills />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
