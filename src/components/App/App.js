import './App.css'
import Header from '../Header';
import Footer from '../Footer';
import { Route, Routes } from "react-router-dom";
import MyLinks from '../../pages/MyLinks';
import About from '../../pages/About';
import Projects from '../../pages/Projects';

function App() {
  const url = "http://localhost:4000/"
 
  return (
    <div className="App">
      <Header/>
        <Routes>

          <Route
            exact path="/"
            element={<About />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          {/* <Route
            path="/about"
            element={<About />}
          /> */}

        </Routes>
      
    </div>
  )

}

export default App;
