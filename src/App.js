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
        <Route path='/' element={<Home/>}>
          <Route path='/benja' element={<Benja/>}/>
          <Route path='/joakito' element={<Joakitowo/>}/>
          <Route path='/manu' element={<Manu/>}/>
        </Route>
      </Routes>
    {/* <img src={semen} className="App-logo" alt="logo" /> */}
    </div>
    </>
  );
}

export default App;
