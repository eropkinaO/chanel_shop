import Chanels from './Components/ChanelComponents/Chanels';
import './App.css';
import AllCategories from './Filter/AllCategories';
import Footer from './Footer';

function Home() {
  return (
    <div>

    <div className='main'>
    <h1>What kind of Chanel products do you like?</h1>  
    <img className='chanel' src="https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,dpr_auto,f_auto/1706103945422-homepagecorpoonedesktopnoparallaxe5jpg.jpg" alt="chanel"/> 
    </div>
       
        <AllCategories/>
        <Chanels/>
        <Footer/>
    </div>
   
  );
}

export default Home;