import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Games from './screens/Games'

import './App.css';

function App() {
  /*return (
    <>
      <Games />
      <Footer />
    </>
  )*/
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Games />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
