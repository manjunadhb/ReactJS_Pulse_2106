import React from 'react'


export default function Tasks() {
    return (
        <div className="mainContainer3">
            <p className="title">Tasks</p>
         <h3 className="title3">Tasks assigned</h3>
            <label className="records">Records</label>
            <select>
<option value="All">All</option>
<option value="2">2</option>
<option value="4">4</option>
</select>
<label className="search">My Search</label>
   <input className="search" type="search" />
            <table className="tasksTable">
          <tr className="tasksTable">
         <th className="tasksTable">#</th>
         <th className="tasksTable">UID</th>
         <th className="tasksTable">ID</th>
         <th className="tasksTable">Type</th>
         <th className="tasksTable">Title</th>
         <th className="tasksTable">Requirements</th>
        <th className="tasksTable">Build to Store</th>
         <th className="tasksTable">Deadline</th>
         <th className="tasksTable">Max.File Size</th>
         <th className="tasksTable">Status</th>
         <th className="tasksTable">Points Earned</th>
         </tr>

         <tr className="tasksTable">
        <td className="tasksTable">1 </td>
        <td className="tasksTable">BTT1 </td>
        <td className="tasksTable"> 59906</td>
        <td className="tasksTable">Technical</td>
        <td className="tasksTable">React </td>
        <td className="tasksTable"> Prepare for Github.</td>
        <td className="tasksTable"> No</td>
        <td className="tasksTable">Before 2:30 pm on 08th September 2021 </td>
        <td className="tasksTable"> Not more than 40 MB</td>
        <td className="tasksTable"> Review Pending</td>
        <td className="tasksTable">0/100 </td>
         </tr>

         <tr className="tasksTable">
        <td className="tasksTable">2 </td>
        <td className="tasksTable">BPT2 </td>
        <td className="tasksTable"> 59856</td>
        <td className="tasksTable">Practice</td>
        <td className="tasksTable"> React Hooks</td>
        <td className="tasksTable">Create task as per requirement. </td>
        <td className="tasksTable">No </td>
        <td className="tasksTable"> Before 2:30 pm on 07th September 2021</td>
        <td className="tasksTable">Not more than 40 MB </td>
        <td className="tasksTable">Review Pending</td>
        <td className="tasksTable">0/100 </td>
         </tr>

         <tr className="tasksTable">
        <td className="tasksTable"> 3</td>
        <td className="tasksTable"> BTT3</td>
        <td className="tasksTable">59652 </td>
        <td className="tasksTable">Technical</td>
        <td className="tasksTable"> Browser</td>
        <td className="tasksTable">Navigation </td>
        <td className="tasksTable">NA </td>
        <td className="tasksTable">Before 2:30 pm on 06th September 2021 </td>
        <td className="tasksTable"> Not more than 40 MB</td>
        <td className="tasksTable">Review Pending </td>
        <td className="tasksTable">0/100 </td>
         </tr>

         <tr className="tasksTable">
        <td className="tasksTable">4 </td>
        <td className="tasksTable">BPT4 </td>
        <td className="tasksTable">59632 </td>
        <td className="tasksTable">Practice</td>
        <td className="tasksTable">Router Dom </td>
        <td className="tasksTable"> Create task as per requirement.</td>
         <td className="tasksTable">No </td>
        <td className="tasksTable"> Before 2:30 pm on 05th September 2021</td>
        <td className="tasksTable"> Not more than 40 MB</td>
        <td className="tasksTable">Review Pending </td>
        <td className="tasksTable">0/100 </td>
         </tr>
         </table>
         </div>
    )
}

