import React from 'react'

export default function Leaves() {
    return (
        <div className="mainbox">
            <div className="box">
                Apply For Leave
            </div>
            <div className="details">
                <div className="">
                    <label>Type Of Leave</label>
                    <select  className="input3">
                        <option>Select</option>
                        <option>Related To Health</option>                 
                        <option>Related To Events</option>
                        <option>Emergency</option>
                    </select>
                </div>
                <div>
                    <label>From</label>
                    <input className="input3" type="date"></input>
                </div>
                <div>
                    <label>To</label>
                    <input className="input3" type="date"></input>
                </div>
                <div>
                    <label>Discription</label>
                    <input className="input1" type="text" placeholder="write details about leave"></input>
                </div>
                <div className="btn">
                    <button>Apply Now</button>           
                </div>
            </div>
        </div>
    )
}
