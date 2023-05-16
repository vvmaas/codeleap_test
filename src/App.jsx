import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
