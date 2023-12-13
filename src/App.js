// import semen from './assets/images/manu-pa-la-caga.jpeg' ;
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/header/header'
import Home from './pages/home/home'
import Benja from './pages/benja/benja';
import Joakitowo from './pages/joakitowo/joakitowo';
import Manu from './pages/manu/manu';

function App() {
  return (
    <>
    <div className="Container">
      <Header />
      <Routes>
          <Route path='/BJE-ReactApp' element={<Home />} /> {/*Se muestra el home cuando no coincida con los otros '/' path */}
          <Route path='/BJE-ReactApp/benja' element={<Benja/>}/>
          <Route path='/BJE-ReactApp/joakito' element={<Joakitowo/>}/>
          <Route path='/BJE-ReactApp/manu' element={ <Manu/>} />
          <Route path='*' element={<h1 style={{color:'white'}}>404</h1>} /> {/*Se muestra el 404 cuando no coincida con los otros '/' path */}
      </Routes>
    </div>
    </>
  );
}

export default App;
