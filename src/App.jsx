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
import EditUser from './features/users/EditUser'
import NewUserForm from './features/users/NewUserForm'
import EditNote from './features/notes/EditNote'
import NewNote from './features/notes/NewNote'
import Prefetch from './features/auth/Prefetch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layouts />} />
      <Route path='/sample' element={<Sample />} />
      <Route index element={<Public />} />
      <Route path='login' element={<Login />} />

      <Route element={<Prefetch />}>
        <Route path='dash' element={<DashLayout />}>
          <Route index element={<Welcome />} />

          <Route path='notes' >
            <Route index element={<NotesList />} />
            <Route path=':id' element={<EditNote />} />
            <Route path='new' element={<NewNote />} />
          </Route>

          <Route path='users' >
            <Route index element={<UserList />} />
            <Route path=':id' element={<EditUser />} />
            <Route path='new' element={<NewUserForm />} />
          </Route>

        </Route>{/* end dash*/}
      </Route>
    </Routes>
  )
}

export default App
