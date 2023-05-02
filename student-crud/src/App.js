import React from 'react';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import CreatStu from "./compnonents/CreatStu";
import ShowStu from "./compnonents/ShowStu";
import EditStu from "./compnonents/EditStu";


function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<CreatStu/>} />
    <Route path='/list' element={<ShowStu/>}  />
    <Route path='/edit/:stuId' element={<EditStu/>}  />
    
  </Routes>
  </BrowserRouter>
  
    </div>
  );
}

export default App;
