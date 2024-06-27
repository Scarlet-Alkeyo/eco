import Navbar from './Navbar';
import './App.css';
import Landing from './Landing';
import Introduction from './Intoduction';


function App() {
  return (
    <div className="App">
      <Introduction/>
    
     <Navbar/>
     <Landing/>
    </div>
  );
}

export default App;
