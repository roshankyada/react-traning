import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./component/Header";
import Footer from "./component/Footer";
import React from 'react'
import Child from "./component/Child";
import A from "./component/A";
import B from "./component/B";
import DemoState from "./component/DemoState"
import Work from "./component/Work";
import ComponentAxios from "./Component1/ComponentAxios";
function App() {




  return (
    <>
      <DemoState>


        <Header title="Header" serchBar={true} />
        <Child />
        <Footer />
        <A />
        <B />
        <Work />
      </DemoState>
      <ComponentAxios />
    </>
  );
}



export default App;
