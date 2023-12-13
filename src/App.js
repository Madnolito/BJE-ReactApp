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
          <Route path='/' element={<Home />} /> {/*Se muestra el home cuando no coincida con los otros '/' path */}
          <Route path='/benja' element={<Benja/>}/>
          <Route path='/joakito' element={<Joakitowo/>}/>
          <Route path='manu' element={ <Manu/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
