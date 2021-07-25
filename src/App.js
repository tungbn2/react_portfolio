import Topbar from "./components/topbar/topbar.jsx"
import Menu from "./components/menu/menu.jsx"
import Intro from "./components/intro/intro.jsx"
import Portfolio from "./components/portfolio/portfolio.jsx"
import Works from  "./components/works/works.jsx"
import Testimonals from "./components/testimonals/testimonals.jsx"
import Contact from "./components/contact/contact.jsx"
import "./App.scss"

import {useState} from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonals />
        <Contact />
      </div>
    </div>
  );
}

export default App;
