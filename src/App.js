
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About us" home="Home"/>
      {/* <Navbar title="Asim" /> */}
      <div className="container my-3">
        <About/>
      <TextForm heading="Enter your text to analyze"/> 
      </div>
    </>
  );
}

export default App;
