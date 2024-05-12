
import Logo from './components/Navbar/Logo';
import Navlist from './components/Navbar/Navlist';
import Button from './components/Button';
import './css/navbar/logo_css/style.css';
import './css/navbar/navbar-css/style.css';
import './css/navbar/navlist-css/style.css';
import './css/button-css/style.css';
import './css/about/about-css/style.css';
import './css/about/about-image-css/style.css';
import Coffecup from './assets/image/coffe-cup.png';
import Kursi from './assets/image/kursi.jpg';
import './css/home/Home-css/style.css';
import './css/home/HomeContent-css/style.css'
import HomeImage from './components/Home/HomeImage';
import HomeContent from './components/Home/HomeContent';
import About from './components/About/AboutContent';
import AboutImage from './components/About/AboutImg';
import Facility from './components/Facility/Facility';
import FacilityImage from './components/Facility/FacilityImage';
import Facility1 from './assets/image/gambar-1.jpg';
import Facility2 from './assets/image/gambar-2.jpg';
import Facility3 from './assets/image/gambar-3.jpg';
import './css/Facility/content-css/style.css';
import './css/Facility/facility-image-css/style.css';
import Menu from './components/Menu/Menu';
import Coffe1 from './assets/image/coffe-1.png';
import Coffe2 from './assets/image/coffe-2.png';
import Coffe3 from './assets/image/coffe-3.png';
import Coffe4 from './assets/image/coffe-4.png';

import Card from './components/Menu/Card';
import './css/menu/menu-css/style.css';
import './css/menu/image-css/style.css';
import Footer from './components/Footer/Footer';
import './css/footer/style.css';





function App() {
  const linkList = ["Home", "Menu", "About", "Facility", "Contact"]; //membuat var props

  return (
    <>
      {/* ini navbar */}
      <div className='navbar-wrapper'>
        <div className='conten-1'>
          <div className='logo'>
            <Logo/>
          </div>
          <div>
            <Navlist data={linkList}/> 
          </div>
        </div>
      </div>
     
     {/* ini bagian home */}
     <div className='home-wrapper'>
      <div className='home-content'>
       <div className='home-image'>
        <HomeImage gambar={Coffecup} />
       </div>
       <div className='home-content-1'>
        <HomeContent/>
        <Button tombol={Button}/>
       </div>
      </div>
     </div>
 
      
      {/* ini bagian about us  */}
      <div className='About-wrapper'>
        <div>
          <About/>
        </div>
        <div className='about-img-wrapper'>
          <AboutImage aboutimg={Kursi}/>
        </div>
      </div>

      {/* ini bagian facility */}
      <div className='facility-wrapper'>
        <div className='facility-content-wrapper'>
            <div>
              <Facility/>
            </div>
            <div className='facility-img'>
                <FacilityImage gambar1={Facility1} gambar2={Facility2} gambar3={Facility3}/>
            </div>
        </div>
      </div>

      {/* ini daftar menu */}
      <div className='menu-wrapper'>
        <div className='menu-content'>
          <div className='menu'>
            <Menu/>
          </div>
          <div className='card'>
            <div className='card-pertama'>
              <Card coffe={Coffe1}/>
              <div className='button-1'>
                <Button/>
              </div>
          
            </div>
            <div className='card-pertama'>
              <Card coffe={Coffe2}/>
              <div className='button-1'>
                <Button/>
              </div>
            </div>
            <div className='card-pertama'>
              <Card coffe={Coffe3}/>
              <div className='button-1'>
                <Button/>
              </div>
            </div>
            <div className='card-pertama'>
              <Card coffe={Coffe4}/>
              <div className='button-1'>
                <Button/>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      

      {/* ini bagian footer */}

      <div className='section-footer'>
          <Footer/>
      </div>
    </>
  )
}

export default App;
