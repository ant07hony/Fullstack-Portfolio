import './App.css'
import Header from '../Header';
import Footer from '../Footer';
import { Route, Routes } from "react-router-dom";
import Skills from '../../pages/Skills';
import About from '../../pages/About';
import Projects from '../../pages/Projects';

function App() {
 
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

          <Route
            path="/skills"
            element={<Skills />}
          />

        </Routes>
        {/* <Footer/> */}
      
    </div>
  )

}

export default App;
