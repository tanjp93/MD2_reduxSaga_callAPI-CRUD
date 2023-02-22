import './App.css';
import { Routes, Route } from 'react-router-dom'
import ListUser from './components/ListUser.js'
import CreateNewUser from './components/CreateNewUser';
import UpdateUser from './components/UpdateUser';


function App() {
  return (
    <Routes>
      <Route path='/' element={<ListUser/>}/>
      <Route path='/creatNewUser' element={<CreateNewUser/>}/>
      <Route path='/updateUser' element={<UpdateUser/>}/>
    </Routes >
  )
}

export default App;
