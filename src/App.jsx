import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layouts from './layouts/Layouts'
import Public from './components/public'
import Login from './features/auth/Login'
import Sample from './components/Sample'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UserList from './features/users/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layouts />} />
      <Route path='/sample' element={<Sample />} />
      <Route index element={<Public />} />
      <Route path='login' element={<Login />} />
      <Route path='dash' element={<DashLayout />}>
        <Route index element={<Welcome />} />
        <Route path='notes' >
          <Route index element={<NotesList />} />
        </Route>
        <Route path='users' >
          <Route index element={<UserList />} />
        </Route>
      </Route>{/* end dash*/}
    </Routes>
  )
}

export default App
