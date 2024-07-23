/*
create react-app
npx create-react-app abc-automobiles
cd abc-automobiles
npm start
*/

/*
functional Components
Javascript function that return jsx to render ui elements
simpler and easier to write as compared to class components
used when you dont need to manage state or lifecycle method

*/

/*

// Test 

function About(){
  return(
    <>
    <h1>About Section</h1>
    <p>We will implement it later</p>
    </>
  )
}
function App(){
  return (
    <>
    <h1>Learning React</h1>
    <p>This is functinal Component</p>
    <About/>
    </>
  )
}

Class Component
extend from React.component
can hold and manage state and provide lifecycle methods 
they are more powerful than functional components but also more complex




   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vehicle-list" element={<VehicleList/>}/>
    </Routes>

*/



/*
Routing 

1. Install React Router : npm install react-router-dom

2. Setup Browser Router
update: src/index.js to include BrowserRouter
updtae src/App.js to inclue routes

*/



import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import AddVehicle from "./components/AddVehicle";
import UpdateVehicle from "./components/UpdateVehicle";


import { Route,Routes } from "react-router-dom";
import VehicleList from "./components/Vehicles";


function App(){
  return(
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vehicle-list" element={<VehicleList/>}/>
      <Route path="/addVehicle" element={<AddVehicle/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/update-vehicle/:id" element={<UpdateVehicle/>}/>
    </Routes>
    <Footer/>

    
    </>
  )
}

export default App;