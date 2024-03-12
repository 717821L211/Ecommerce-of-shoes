// import React from 'react';
// import Login from './Login';
// import Signup from './Signup'
// import About from './About';
// import Contact from './Contact';                                 
// import Mens from './Catagory/Mens';
// import Womens from './Catagory/Womens';
// import Kids from './Catagory/Kids';
// import Navbar from './component/Navbar/Navbar';
// import './App.css';  
// import './Style.css';
// import Home from './Home';
// import Belttype from './Catagory/Belttype';
// import Shoe from './Catagory/Shoe';
// import Rough from './Catagory/Rough';
// import Slipper from './Catagory/Slipper';
// import Vtype from './Catagory/Vtype';
// import Formalshoe from './Catagory/Formalshoe';
// import Filpflop from './Catagory/Filpflop';
// import Casualshoe from './Catagory/Casualshoe';
// import Reggular from './Catagory/Reggular';
// import ImagePopup from './component/ImagePopup';
// import Gallery from './component/Gallery';


// import {BrowserRouter, Routes,Route} from 'react-router-dom';

// function App() {                       
//   return (                
//     <div className="App">              
//      <BrowserRouter>          
//      <Navbar/>        
        
//      <Routes>      
          
//      <Route path='/' element={<Home />}/>    
//       <Route path='/login' element={<Login/>}/>       
//       <Route path='/signup' element={<Signup />}/>     
//       <Route path='/about' element={<About/>}/>    
//       <Route path='/contact' element={<Contact/>}/>          
//       <Route path="/" element={<Home/>} />      
//       <Route path="/mens" element={<Mens/>} />    
//       <Route path="/womens"element={<Womens/>}/>     
//       <Route path="/kids"element={<Kids/>}/>          
//       <Route path="/shoe"element={<Shoe/>}/>      
//       <Route path="/Formalshoe"element={<Formalshoe/>}/>     
//       <Route path="/Rough"element={<Rough/>}/>     
//       <Route path="/Vtype"element={<Vtype/>}/>      
//       <Route path="/Belttype"element={<Belttype/>}/>             
//       <Route path="/Casualshoe"element={<Casualshoe/>}/>       
//       <Route path="/Reggular"element={<Reggular/>}/>       
//       <Route path="/Slipper"element={<Slipper/>}/>      
//       <Route path="/Filpflop"element={<Filpflop/>}/>    
//       <Route path="/gallery" component={Gallery} />
//        <Route path="/ImagePopup" component={ImagePopup} />  
//      </Routes>        
//      </BrowserRouter>       
//     </div>      
        
               
//   );                              
// }           
                  
// export default App;      
import React from 'react';
import Login from './Login';
import Signup from './Signup'
import About from './About';
import Contact from './Contact';                                 
import Mens from './Catagory/Mens';
import Womens from './Catagory/Womens';
import Kids from './Catagory/Kids';
import Navbar from './component/Navbar/Navbar';
import './App.css';  
import './Style.css';
import Home from './Home';
import Belttype from './Catagory/Belttype';
import Shoe from './Catagory/Shoe';
import Rough from './Catagory/Rough';
import Slipper from './Catagory/Slipper';
import Vtype from './Catagory/Vtype';
import Formalshoe from './Catagory/Formalshoe';
import Filpflop from './Catagory/Filpflop';
import Casualshoe from './Catagory/Casualshoe';
import Reggular from './Catagory/Reggular';
import ImagePopup from './component/ImagePopup';
import Gallery from './component/Gallery';


import {BrowserRouter, Routes,Route} from 'react-router-dom';
import ProductDescription from './Catagory/ProductDescription';

function App() {                       
  return (                
    <div className='App'>              
     <BrowserRouter>          
     <Navbar/>        
        
     <Routes>      
          
     <Route path='/' element={<Home />}/>    
      <Route path='/login' element={<Login/>}/>       
      <Route path='/signup' element={<Signup />}/>     
      <Route path='/about' element={<About/>}/>    
      <Route path='/contact' element={<Contact/>}/>          
      <Route path='/' element={<Home/>} />      
      <Route path='/mens' element={<Mens/>} />    
      <Route path='/womens'element={<Womens/>}/>     
      <Route path='/kids'element={<Kids/>}/>          
      <Route path='/shoe'element={<Shoe/>}/>      
      <Route path='/Formalshoe'element={<Formalshoe/>}/>     
      <Route path='/Rough'element={<Rough/>}/>     
      <Route path='/Vtype'element={<Vtype/>}/>      
      <Route path='/Belttype'element={<Belttype/>}/>             
      <Route path='/Casualshoe'element={<Casualshoe/>}/>       
      <Route path='/Reggular'element={<Reggular/>}/>       
      <Route path='/Slipper'element={<Slipper/>}/>      
      <Route path='/Filpflop'element={<Filpflop/>}/> 
      <Route path='/:productName' element={<ProductDescription/>}/>   
      <Route path='/gallery' component={Gallery} />
       <Route path='/ImagePopup' component={ImagePopup} />  
     </Routes>        
     </BrowserRouter>       
    </div>      
        
               
  );                              
}           
                  
export default App;                                                             