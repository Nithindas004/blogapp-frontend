import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Register from './components/Register';
import Addpost from './components/Addpost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/addpost' element={<Addpost/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
