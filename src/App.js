import logo from './logo.svg';
import './App.css';
import Main from './pages/main';
import {Routes, Route, BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Main/>}/>
     </Routes>
     </BrowserRouter>
  </div>
  );
}

export default App;
