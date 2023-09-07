
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componenets/header/Navbar';

// links
import About from './componenets/pages/About';
import Services from './componenets/pages/Services';
import Contect from './componenets/pages/Contect';
import Home from './componenets/pages/Home';



function App() {
  return (
    <div>
      <p> 
       <Navbar/>
       <Routes>
       <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contect' element={<Contect />}/>
       </Routes>
      </p>
    </div>
  );
}

export default App;
