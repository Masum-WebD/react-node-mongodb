import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Addusers from './components/AddUsers/Addusers';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="user/add" element={<Addusers></Addusers>}></Route>
      </Routes>
    </div>
  );
}

export default App;
