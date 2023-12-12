import './home.css';
import manu from '../../assets/images/manu-pa-la-caga.jpeg';
import joaco from '../../assets/images/joaco.jpeg';
import benja from '../../assets/images/benja.jpeg';
import { Link, Outlet } from 'react-router-dom';

function Home(){
    return(
        <>
        <div class="home-container">

            <h1>Los Creadores</h1>

            <div class="cartas-home">
                <div class="carta">
                    <img src={manu} className="carta-img" alt="logo" />
                    <h2>Manolito</h2>
                    <p>Ezquisofrenico no medicado, el ataca menores.</p>
                    <Link to='/manu'>Manu cosas</Link>
                </div>
                <div class="carta">
                    <img src={joaco} className="carta-img" alt="logo" />
                    <h2>Joakito</h2>
                    <p>Se echa todos los ramos, fuckboy que no ha salido del closet.</p>
                    <Link to='/joakito'>Joaco cosas</Link>
                </div>
                <div class="carta">
                    <img src={benja} className="carta-img" alt="logo" />
                    <h2>Benja Supra</h2>
                    <p>Básicamente no tiene vida por la polola, le gusta hacer bollos con semen.</p>
                    <Link to='/benja'>Benja cosas</Link>
                </div>
            </div>
            
            <div class="snowflakes" aria-hidden="true">
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div>
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div>
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div>
            </div>    
            <Outlet />
        </div>
        </>
    );
}

export default Home;