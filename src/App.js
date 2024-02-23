
import './output.css';
import Adminform from './pages/Adminform';
import Pointstable from './pages/Pointstable';
import Main from './pages/main';
import {Routes, Route, BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>

     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path="/adminform" element={<Adminform/>}/>
      <Route path="/livescore" element={<Pointstable/>}/>
     </Routes>
     </BrowserRouter>
  </div>
  );
}

export default App;
