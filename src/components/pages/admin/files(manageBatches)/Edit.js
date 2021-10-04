import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../styles/Edit.css'
import '../../../styles/Edit_Del.css'

export default function Edit() {

    const onSubmitClick = () =>
    {
        alert("Updated Successfully")
    }
    return (
        <div className="dummy">
        <div className="edit_deleteContainer">
        <div className="edit_deleteDiv editDiv">
        <label><strong>Edit Details</strong></label><br/>
         Batch Start Date:
         <input type="date"/><br/><br/>
         Actual End Date:
         <input type="date" /><br/><br/>
        <div className="editGrid"> 
        <button onClick={onSubmitClick}>Done</button>
        <NavLink to="/dashboard">Back</NavLink> 
        </div>
       </div>
       </div> 
       </div>
    )
}
