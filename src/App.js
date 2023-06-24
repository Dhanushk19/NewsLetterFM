import Newsletter from "../src/Components/Newsletter.jsx";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success  from "./Components/Success.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
          <Route index element={<Newsletter />} />
          <Route path="success" element={<Success />} />
          

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
