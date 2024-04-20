import logo from "./logo.svg";
import "./App.css";

import Word from "./Component/Word";
import Paragraph from "./Component/Paragraph";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Word />} />
          <Route path="/paragraph" element={<Paragraph />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
