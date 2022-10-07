
import './App.css';
import Nav from "./Componenets/Nav";
import Footer from "./Componenets/Footer";
import Home from ".././src/Pages/Home";

import {
	Routes,
	Route,
} from 'react-router-dom';
import About from './Pages/About';

function App() {
  
  return (
    <div className="App">
      
         <Nav/>
          
          <Routes>
             <Route exact path='/' element={< Home />}> </Route>
             <Route exact path='/about' element={< About />}> </Route>
          </Routes>
      
       <Footer/>

  
    
    </div>
  )
}

export default App;
