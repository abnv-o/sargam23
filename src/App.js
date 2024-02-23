
import './output.css';
import Adminform from './pages/Adminform';
import Pointstable from './pages/Pointstable';
import Main from './pages/main';
import Literature from './pages/literature';
import {Routes, Route, BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>

     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path="/adminform" element={<Adminform/>}/>
      <Route path="/livescore" element={<Pointstable/>}/>
      <Route path="/literature" element={<Literature/>}/>
     </Routes>
     </BrowserRouter>
  </div>
  );
}

export default App;
