import './App.css';
import Header from "./component/Header";
import Work from "./component/Work";
import Footer from "./component/Footer";
import Radium, { StyleRoot } from 'radium';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';


function App() {
  let rollNo = 21;
  const [count1, setCount1] = useState(true)

  return (

    <StyleRoot>

      <div className="App" >
        <Header title="todos list" serchBar={true} />
        <button onClick={() => { setCount1({ count1: false }); }}>count faliar </button>
        {count1 ? <Footer name="sachin" rollNo={rollNo} /> : null}

        <Work />

      </div>
    </StyleRoot>
  );
}

export default Radium(App);
