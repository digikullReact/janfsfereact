import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import NoteShow from "./components/NoteShow";
import Show from "./components/Show";
import HeaderF from "./components/HeaderF";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <div className="App">
      <HeaderF/>
     
      <Routes>
      <Route path="/add" element={
              <PrivateRoute>
                <Add />
              </PrivateRoute>
            } />

<Route path="/add/:id/uu/:data" element={
              <PrivateRoute>
                <Add />
              </PrivateRoute>
            } />     
      <Route path="/show" element={
              <PrivateRoute>
                <Show />
              </PrivateRoute>
            } />
      <Route path="/login" element={<Login/>} />



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


