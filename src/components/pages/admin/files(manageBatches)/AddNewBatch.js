import React from 'react'
import { Link } from 'react-router-dom'
// import '../../styles/AddNewBatch.css';
import '../../../styles/AddNewBatch.css'
export default function AddNewBatch() {
    const onCreateBatch = () =>
    {
        alert("Batch Created Successfully")
    }
    return (
        <div className="addNewBatchContainer">
        <div className="addNewBatchDiv">
           <h6><strong> Create New Batch</strong></h6><br/>
           <label >Course:</label> 
          <input type="radio" name="selectCourse" className="radioBtn rB1" value="c1"/>
           <label for="c1"> &nbsp; &nbsp; &nbsp;IPhone Job Oriented Course</label><br/>
           <input type="radio" name="selectCourse" className="radioBtn rB2" value="c2"/>
           <label for="c2">  &nbsp; &nbsp; &nbsp;React Native</label><br/>
           <input  type="radio" name="selectCourse" className="radioBtn rB3" value="c3"/>
           <label for="c3">  &nbsp; &nbsp; &nbsp;Flutter</label><br/>
           <input type="radio"  name="selectCourse" className="radioBtn rB4" value="c4"/>
           <label for="c4">  &nbsp; &nbsp; &nbsp;Angular JS</label><br/>
            <div className="startDate">
           <label >Start Date:</label><input type="date"/><br/>
           </div>
           <span>Select batch start date</span><br/>
           <div className="batchId">
            <label >Batch ID:</label><input type="number" /><br/>
            </div>
            <span>Please Enter Batch ID</span><br/>
            <div className="feeDetails">
            <label >Fee Details:</label>
                <div>
                "Total Fee":37,000,<br/>
                          First Instalment:13000,<br/>
                          Second Instalment:13000,<br/>
                          Third Instalment:11000<br/>
                           "Single Payment":34000<br/>
                   
                </div>
                </div>
                <div className="batchStatus">
            <label >Batch Status:</label> 
            <select >
            <option  value="Select">Select</option>
            <option value="Yet to Start">Yet to Start</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            </select><br/>
            </div>
            <div>
            <button onClick={onCreateBatch}>Create Batch</button>
            <Link to="/dashboard">Back</Link>
            </div>
 </div>
 </div>
    )
}
