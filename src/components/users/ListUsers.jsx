import { Button, Table } from "react-bootstrap";

export default function ListUsers({users, handleEditUser, handleDeleteUser}) {

    return (

        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th colSpan={2} className="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
        {users.map((user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName + ' '+user.lastName }</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="text-center">
                    <Button variant="info"  onClick={() => handleEditUser(user.id)}>Edit</Button>
                </td>
                <td  className="text-center">
                    <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
                </td>
            </tr>
        ))}


            
      </tbody>
    </Table>

    )
}