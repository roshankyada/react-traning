import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./component/Header";
// import Footer from "./component/Footer";
// import Child from "./component/Child";
// //import A from "./component/A";
// import B from "./component/B";
// import DemoState from "./component/DemoState"
// import Work from "./component/Work";
import Cmp1 from './Component1/Cmp1';
import Cmp2 from './Component1/Cmp2';
import Cmp3 from './Component1/Cmp3';
import Cmp4 from './Component1/Cmp4';
import ApiGet from './Component1/ApiGet';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Childe from './Routes/Childe';
import { User } from './Routes/User';
import Form from './Component2 /Form'
import Dropdown from './Component2 /Dropdown/Dropdown';
//import Form1 from './Component2 /Form1';






function App() {

  const users = [
    { id: '1', fullName: 'Robin ' },
    { id: '2', fullName: 'Sara' },
  ];

  // element={<Contact />}


  return (
    <>
      <Header title="Header" serchBar={true} />

      <Routes>

        <Route exact path="/" element={<Home name='roshan' />} >
          <Route exact path="/About/:id" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} >
            <Route exact path='/Contact/Childe' element={<Childe users={users} />} />
            <Route path="/Contact/Childe/:id" element={<User />} />
            <Route exact path='/Contact/Admin' element={<User />} />
          </Route>
        </Route>
        <Route path='*' element={'error'} />

      </Routes>
      <Form />
      {/* <Form1 /> */}
      <Dropdown />

      {/* <DemoState>
        <Child />
        <Footer />
        <A /> 
        <B />
        <Work />
      </DemoState> */}

      <Cmp1 />
      <Cmp2 />
      <Cmp3 />
      <Cmp4 />
      <ApiGet />


    </>
  );
}




export default App;
