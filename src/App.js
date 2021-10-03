import './App.css';
import Login from './components/pages/common/Login';
import SignUp from './components/pages/common/SignUp';
import { Route, Switch } from 'react-router-dom';
import Password from './components/pages/common/Password';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/user/Home';
import ManageUsers from './components/pages/admin/ManageUsers';
import ManageBatches from './components/pages/admin/ManageBatches';
import Edit from './components/pages/admin/files(manageBatches)/Edit';
import Delete from './components/pages/admin/files(manageBatches)/Delete';
import AddNewBatch from './components/pages/admin/files(manageBatches)/AddNewBatch';


function App() {
  return (

    <div>
      <Switch>
        {/* login component opens when pulse page opened */}
        <Route exact path="/" component={Login} />
        {/* new user to the pulse can create account  on click the signup  */}
        <Route path="/signup" component={SignUp} />
        <Route path="/password" component={Password} />
        <Route path="/home" component={Home} />
        {/* <Route path="/manageBatches" component={ManageBatches}/> */}
        </Switch>
      {/* <Route path="/manageBatches/edit" component={Edit} />
       <Route path="/manageBatches/delete" component={Delete}/>
       <Route path="/manageBatches/addNewBatch" component={AddNewBatch}/> */}
    </div>



  );
}

export default App;
