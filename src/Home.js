import Chanels from './Components/ChanelComponents/Chanels';
import Cart from './Cart/Cart';
import './App.css';
import AllCategories from './Filter/AllCategories';

function App() {
  return (
    <div className="App">

    <div className='main'>
    <h1>What kind of Chanel products do you like?</h1>   
    </div>

       
        <AllCategories/>
        <Cart/>
        <Chanels/>
        
      
    </div>
  );
}

export default App;