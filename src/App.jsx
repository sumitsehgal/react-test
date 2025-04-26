import { useState } from 'react'
import './App.css'
import ListUsers from './components/users/ListUsers'
import AddEditUser from './components/users/AddEditUser'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from './features/user/userSlice'
import { Button, Col, Container, Row } from 'react-bootstrap'

function App() {
  const [listView, setListView] = useState(true)
  const [editUser, setEditUser] = useState()

  const users = useSelector((state) => state.users.data)

  const dispatch = useDispatch()

  function handleCancel() {
    setListView((state) => true)
  }

  let mainView = <ListUsers users={users} handleEditUser={handleEditUser} handleDeleteUser={handleDeleteUser} />
  if (!listView) {
    mainView = <AddEditUser onCancel={handleCancel} user={editUser} />
  }

  function handleAddUser() {
    setListView((state) => false)
    setEditUser((user) => ({
        id:null,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        address: '',
        education: [],
        experience: []
    }))
  }

  function getUserById(userId) {
    const user = users.find((user) => user.id === userId)
    if(!user) {
       return null
    }
    return user
  }

  function handleEditUser(userId) {
    setListView((state) => false)
    let editingUser = getUserById(userId)
    console.log("editingUser", editingUser)
    if(editingUser) {
      setEditUser((user) => editingUser)
    }
    
  }

  function handleDeleteUser(userId) {
    dispatch(deleteUser(userId))
  }


  return (
    <>
      <Container fluid className="mt-5">
        <h1 className="text-center">User Management System</h1>  
        <Button variant='primary' onClick={handleAddUser}>Add User</Button>
        <Row className="mt-3">
          <Col md={12}>
            {mainView}
          </Col>
        </Row>
      
      </Container>

      
           
    </>
  )
}

export default App
