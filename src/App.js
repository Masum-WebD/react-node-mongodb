import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Addusers from './components/AddUsers/Addusers';
import Home from './components/Home/Home';
import UpdateUser from './components/updateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="user/add" element={<Addusers></Addusers>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
