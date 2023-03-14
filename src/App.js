import './App.css';
import Header from "./component/Header";
import Work from "./component/Work";
import Footer from "./component/Footer";
import Radium, { StyleRoot } from 'radium';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  let rollNo = 21;
  return (

    <StyleRoot>
      <div className="App" >
        <Header title="todos list" serchBar={true} />

        <Footer name="sachin" rollNo={rollNo} />
        <Work />

      </div>
    </StyleRoot>
  );
}

export default Radium(App);
