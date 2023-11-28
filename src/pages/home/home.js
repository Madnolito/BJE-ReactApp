import './home.css';
import manu from '../../assets/images/manu-pa-la-caga.jpeg';
import joaco from '../../assets/images/joaco.jpeg';
import benja from '../../assets/images/benja.jpeg';
let vacio='';
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
                    <a href={vacio}>Manu cosas</a>
                </div>
                <div class="carta">
                    <img src={joaco} className="carta-img" alt="logo" />
                    <h2>Joakito</h2>
                    <p>Se echa todos los ramos, fuckboy que no ha salido del closet.</p>
                    <a href={vacio}>Joaco cosas</a>
                </div>
                <div class="carta">
                    <img src={benja} className="carta-img" alt="logo" />
                    <h2>Benja Supra</h2>
                    <p>Básicamente no tiene vida por la polola, le gusta hacer bollos con semen.</p>
                    <a href={vacio}>Benja cosas</a>
                </div>
            </div>               

        </div>
        </>
    );
}

export default Home;