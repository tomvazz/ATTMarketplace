import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/login" element={<div>hello</div>} />
      <Route exact path="/signUp" element={<div>hello2</div>} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
