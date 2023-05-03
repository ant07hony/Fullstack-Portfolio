import './App.css'
import Header from '../Header';
import Footer from '../Footer';
import { Route, Routes } from "react-router-dom";
import Home from '../../pages/Home';
import About from '../../pages/About';
import Projects from '../../pages/Projects';

function App() {

  const URL = "<INSERT HEROKU URL >"
  return (
    <div className="App">
      <Header/>
        <Routes>

          <Route
            exact path="/"
            element={<Home />}
          />

          <Route
            path="/projects"
            element={<Projects URL={URL} />}
          />

          <Route
            path="/about"
            element={<About URL={URL} />}
          />

        </Routes>
    </div>
  )

}

export default App;
