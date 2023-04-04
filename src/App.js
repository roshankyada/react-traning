import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./component/Header";
import Footer from "./component/Footer";
import React from 'react'
import Child from "./component/Child";
//import A from "./component/A";
import B from "./component/B";
import DemoState from "./component/DemoState"
import Work from "./component/Work";
import Cmp1 from './Component1/Cmp1';
import Cmp2 from './Component1/Cmp2';
import Cmp3 from './Component1/Cmp3';
import Cmp4 from './Component1/Cmp4';
import ApiGet from './Component1/ApiGet';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';


function App() {




  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home name='roshan' />} />
        <Route exact path="/About/:id/:name" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
      <DemoState>


        <Header title="Header" serchBar={true} />
        <Child />
        <Footer />
        {/* <A /> */}
        <B />
        <Work />
      </DemoState>

      <Cmp1 />
      <Cmp2 />
      <Cmp3 />
      <Cmp4 />
      <ApiGet />


    </>
  );
}



export default App;
