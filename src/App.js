import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import NoteShow from "./components/NoteShow";
import Show from "./components/Show";
import HeaderF from "./components/HeaderF";

export default function App() {
  return (
    <div className="App">
      <HeaderF/>
     
      <Routes>
      <Route path="/add" element={<Add/>} />
      <Route path="/show" element={<Show/>} />

       {
         /**
          *  <Route path="/googlebooks" element={<GoogleBooks />} />
        <Route path="/login" element={<Login/>} />
          */
       }
       
      </Routes>
    </div>
  );
}
