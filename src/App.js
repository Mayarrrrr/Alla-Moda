import './App.css';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Blogs from './components/blogs/Blogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Blogs" element={<Blogs/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
