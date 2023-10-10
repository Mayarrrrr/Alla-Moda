import './App.css';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route , HashRouter} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Blogs from './components/blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Home/>
      <BrowserRouter>
      <Routes>
          <Route exact path="/Alla-Moda" element={<Home/>} />
          <Route exact path="/Alla-Moda/Blogs" element={<Blogs/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
