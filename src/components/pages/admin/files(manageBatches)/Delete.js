import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/Delete.css'
import '../../../styles/Edit_Del.css'

export default function Delete() {

    const onDelete = () =>
    {
        alert("Deleted Successfully")
    }
    return (
        <div className="edit_deleteContainer">
        <div className="edit_deleteDiv deleteDiv">
            <label>Are You Sure to delete</label> <br/>
            <div className="delGrid">
            <button onClick={onDelete}>Yes,Delete</button>
            <Link to="/dashboard">No,Cancel</Link>
            </div>
        </div>
        </div>
    )
}
