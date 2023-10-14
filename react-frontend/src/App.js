import './App.css';
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';

function App() {
  return (
    <BrowserRouter>
   <Navbar></Navbar>
   <div className='container'>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/adduser" element={<AddUser></AddUser>}></Route>
    <Route path="/edituser/:id" element={<EditUser></EditUser>}></Route>
    <Route path="/viewemp/:id" element={<ViewUser></ViewUser>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  
  
    
  );
}

export default App;
