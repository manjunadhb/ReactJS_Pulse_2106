import { useState } from "react";
import { NavLink ,Route} from "react-router-dom";
import FeeReports from "./pages/admin/FeeReports";
import Rankings from "./pages/admin/Rankings"
import BatchesSummary from './pages/admin/BatchesSummary'
import ManageBatches from './pages/admin/ManageBatches'
import AdminMessages from './pages/admin/AdminMessages'
import AdminRequests from './pages/admin/AdminRequests';
import'./Tabs.css';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container-fluid">
      <div className="block-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Batch Summary
        
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Manage Batches
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Ranking
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Messages
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Requests
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <BatchesSummary/>
          
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <ManageBatches/>
          
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Rankings/>
          
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <AdminMessages/>
          
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <AdminRequests/>
          
        </div>
      </div>
    </div>
  );
}

export default Tabs;