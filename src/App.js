import './App.css';
import Login from './components/pages/common/Login';
import SignUp from './components/pages/common/SignUp';
import { Route, Switch } from 'react-router-dom';
import Password from './components/pages/common/Password';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/user/Home';
import Navbar from './components/Navbar';
import DailyStatusUpdate from './components/pages/user/DailyStatusUpdate';
import Tasks from './components/pages/user/Tasks';
import Navigation from './components/pages/user/Navigation';
import Leaves from './components/pages/user/Leaves';
import Requests from './components/pages/user/Requests';
import Messages from './components/pages/user/Messages';
import Tabs from './components/Tabs';
import FeeReports from './components/pages/admin/FeeReports';

function App() {

  return (

    <div>
      <Navbar/>
      <Switch>
        {/* login component opens when pulse page opened */}
        <Route exact path="/" component={Login} />
        {/* new user to the pulse can create account  on click the signup  */}
        <Route path="/signup" component={SignUp} />
        <Route path="/password" component={Password} />
        <Route path="/dashboard" component={Tabs}/>
        <Route path="/report" component={FeeReports}/>
        <Route path="/manage" component={Home}/>
        <Route path="/setting" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/dsu" component={DailyStatusUpdate}/>
        <Route path="/tasks" component={Tasks}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/leaves" component={Leaves}/>
        <Route path='/requests' component={Requests}/>
      </Switch>

    </div>



  );
}

export default App;
