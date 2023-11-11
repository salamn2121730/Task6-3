
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Android from './Pages/Android/Android';
import Accessoires from './Pages/Accessoires/Accessoires';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/android' element={<Android/>}/>
        <Route path='/accessoires' element={<Accessoires/>}/>

      </Routes>

      

    </div>
  );
}

export default App;
