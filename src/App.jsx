import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          {/* <Route path="/home" element={} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
