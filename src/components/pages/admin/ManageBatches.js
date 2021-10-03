import React from 'react'
import { NavLink,Link} from 'react-router-dom'

export default function ManageBatches() {

return (
<div>
        <div className="mb_div">
            <Link className="batchLink" to="/manageBatches/addNewBatch">Add New Batch</Link><br/>
            <input type="search" placeholder="Search"/>
            </div>
        <div className="mbContainer">
        <div className="mbTable">
           <table width="100%" >
               <tr>
                   <th >Id</th>
                   <th >Course</th>
                   <th >Batch Start Date</th>
                   <th >Duration</th>
                   <th >Proposed End Date</th>
                   <th >Batch ID</th>
                   <th >Batch Status</th>
                   <th >Actual End Date</th>
                   <th >Actual Duration</th>
                   <th >Difference in Days</th>
                   <th >Edit</th>
                   <th >Delete</th>
              </tr>
               <tr>
                   <td>1</td>
                   <td>React</td>
                   <td>2021-06-21</td>
                   <td>0</td>
                   <td>2021-10-19</td>
                   <td>2106</td>
                   <td>In Progress</td>
                   <td>null</td>
                   <td>94</td>
                   <td>-26</td>
                   <td>
                       <Link className="edit_delLink" to="/manageBatches/edit">Edit</Link>
                   </td>
                   <td>
                       <Link  className="edit_delLink" to="/manageBatches/delete">Delete</Link>
                       </td>
               </tr>
               <tr>
                   <td >2</td>
                   <td>React</td>
                   <td>2021-06-21</td>
                   <td>0</td>
                   <td>2021-10-19</td>
                   <td>2106</td>
                   <td>In Progress</td>
                   <td>null</td>
                   <td>94</td>
                   <td>-26</td>
                   <td>
                       <Link  className="edit_delLink"  to="/manageBatches/edit">Edit</Link>
                   </td>
                     
                   <td> <Link className="edit_delLink" to="/manageBatches/delete">Delete</Link></td>
               </tr>
               <tr>
                   <td >3</td>
                   <td>React</td>
                   <td>2021-06-21</td>
                   <td>0</td>
                   <td>2021-10-19</td>
                   <td>2106</td>
                   <td>In Progress</td>
                   <td>null</td>
                   <td>94</td>
                   <td>-26</td>
                   <td>
                   <Link  className="edit_delLink" to="/manageBatches/edit">Edit</Link>
                       </td>
                   <td> <Link  className="edit_delLink" to="/manageBatches/delete">Delete</Link></td>
               </tr>
               <tr>
                   <td >4</td>
                   <td>React</td>
                   <td>2021-06-21</td>
                   <td>0</td>
                   <td>2021-10-19</td>
                   <td>2106</td>
                   <td>In Progress</td>
                   <td>null</td>
                   <td>94</td>
                   <td>-26</td>
                   <td>
                   <Link  className="edit_delLink" to="/manageBatches/edit">Edit</Link>
                   </td>
                   <td> <Link className="edit_delLink" to="/manageBatches/delete">Delete</Link></td>
               </tr>
               <tr>
                   <td >5</td>
                   <td >React</td>
                   <td>2021-06-21</td>
                   <td>0</td>
                   <td>2021-10-19</td>
                   <td>2106</td>
                   <td>In Progress</td>
                   <td>null</td>
                   <td>94</td>
                   <td>-26</td>
                   <td>
                   <Link  className="edit_delLink" to="/manageBatches/edit">Edit</Link>
                   </td>
                   <td> <Link  className="edit_delLink" to="/manageBatches/delete">Delete</Link></td>
               </tr>

           </table>
        </div>
        </div>
        </div>
    )
}
