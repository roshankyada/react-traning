import './App.css';
import Header from "./component/Header";
import Work from "./component/Work";
import Footer from "./component/Footer";

function App() {


  return (

    <>
      <div className="App" >
        <Header title="todos list" serchBar={true} />

        <Footer />
        {/* <Work /> */}
      </div>
    </>
  );
}

export default App;
