import './App.css';
import Header from "./component/Header";
import Work from "./component/Work";
import Footer from "./component/Footer";
import Radium, { StyleRoot } from 'radium';
function App() {


  return (

    <StyleRoot>
      <div className="App" >
        <Header title="todos list" serchBar={true} />

        <Footer />
        <Work />
      </div>
    </StyleRoot>
  );
}

export default Radium(App);
