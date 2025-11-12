import "./App.css";
import { useState } from "react";
import About from "./components/About";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />

          <div className="container my-5">
            <Routes>
              <Route path="/" element={<Notes showAlert={showAlert} />} />
              <Route path="/add" element={<AddNote showAlert={showAlert} />} />
              <Route path="/about" element={<About showAlert={showAlert} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
