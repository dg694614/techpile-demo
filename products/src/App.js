import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProd from "./components/CreateProd";
import EditProd from "./components/EditProd";
import ProdData from "./components/ProdData";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateProd/>} />
          <Route path="/list" element={<ProdData/>}/>
          <Route path="/edit/:prodId" element={<EditProd/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
};
export default App;
