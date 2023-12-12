import { Link } from 'react-router-dom';
import './header.css';
let vacio = '';

function Header(){
    return(
        <>
             <header>
             <nav id='menu' className="desplegable">
                 <ul>
                     <li><a href='/'>Home</a></li>
                 </ul>
             </nav>
             </header>
        </>
    );
}

export default Header;