import React from 'react'
import Edit from './files(manageBatches)/Edit'
import { Route } from 'react-router'
import { Link} from 'react-router-dom'




export default function ManageUsers() {
  
    return (
        
      <div>
        
            <table style={{width:"90%"}}>
                <thead>
                <tr>
                     <th>USER</th>
                     <th>ROLE</th>
                     <th>MOBILE NO.</th>
                     <th>JOINED DATE</th>
                     <th>APPROVE</th>
                     <th>ACTIONS</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>User1</td>
                    <td>Admin</td>
                    <td>123456789</td>
                    <td>2021</td>
                    <td>Yes</td>
                    <td>
                        <select >
                            <option value="Actions">Actions</option>
                            <option value="Edit">Edit</option>
                            <option value="Delete">Delete</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>User1</td>
                    <td>Admin</td>
                    <td>123456789</td>
                    <td>2021</td>
                    <td>Yes</td>
                    <td>
                        <select >
                            <option value="Actions">Actions</option>
                            <option value="Edit">Edit</option>
                            <option value="Delete">Delete</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>User1</td>
                    <td>Admin</td>
                    <td>123456789</td>
                    <td>2021</td>
                    <td>Yes</td>
                    <td>
                        <select >
                            <option value="Actions">Actions</option>
                            <option value="Edit">Edit</option>
                            <option value="Delete">Delete</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>User1</td>
                    <td>Admin</td>
                    <td>123456789</td>
                    <td>2021</td>
                    <td>Yes</td>
                    <td>
                        <select >
                            <option value="Actions">Actions</option>
                            <option value="Edit">
                            Edit
                                </option>
                            <option value="Delete">Delete</option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>

       {/* <Route path="/edit" component={Edit}/> */}


       </div>
    )
}
