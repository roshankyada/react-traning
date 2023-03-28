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


function App() {




  return (
    <>
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
