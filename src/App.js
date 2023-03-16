import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./component/Header";
//import Footer from "./component/Footer";
import React from 'react'
//import Child from "./component/Child";
import A from "./component/A";
import B from "./component/B";

function App() {


  return (


    <>
      <div className="App" >

        <Header title="todos list" serchBar={true} />

        {/* {count1 ? <Footer name="sachin" rollNo={rollNo} /> : null}
      <Child name="testProps" />
       */}
        <A name="A" />
        <B name="B" />
      </div>
    </>
  );
}

export default App;
