import './App.css';
import Stars from './Stars/Stars';
import Data from './Listing/Data.json'
import Listing from './Listing/Listing';

function App() {
  return (
    <div>
    <Stars count={4}></Stars>
    <Listing items={Data}></Listing>
    </div>
  );
}

export default App;
