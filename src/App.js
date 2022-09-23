import { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Games from './screens/Games'

import './App.css';

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  const resize = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [width])

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Games width={width} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
