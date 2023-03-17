import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./component/Header";
import Footer from "./component/Footer";
import React from 'react'
import Child from "./component/Child";
import A from "./component/A";
import B from "./component/B";


function App() {


  return (
    <>
      <Header title="Header" serchBar={true} />
      <Child />
      <Footer />
      <A />
      <B />

    </>
  );
}



export default App;
