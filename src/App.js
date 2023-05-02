import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {

  const URL = "<INSERT HEROKU URL >"
  return (
    <div className="App">
      <header>
        <Routes>

          <Route
            exact path="/"
            elements={<Home />}
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
      </header>
    </div>
  )

}

export default App;
