
import './output.css';
import Adminform from './pages/Adminform';
import Pointstable from './pages/Pointstable';
import Main from './pages/main';
import Literature from './pages/Literature';
import Dance from './pages/Dance';
import Finearts from './pages/Finearts';
import Music from './pages/Music';
import Theatre from './pages/Theatre';
import Footer from './components/Footer';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>

     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path="/adminform" element={<Adminform/>}/>
      <Route path="/livescore" element={<Pointstable/>}/>
      <Route path="/literature" element={<Literature/>}/>
      <Route path="/music" element={<Music/>}/>
      <Route path="/dance" element={<Dance/>}/>
      <Route path="/theatre" element={<Theatre/>}/>
      <Route path="/finearts" element={<Finearts/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
  </div>
  );
}

export default App;
