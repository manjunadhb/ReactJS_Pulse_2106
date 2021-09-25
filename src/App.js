import './App.css';
import Login from './pages/common/Login';
import SignUp from './pages/common/SignUp';
import { Route, Switch } from 'react-router-dom';
import Password from './pages/common/Password';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/user/Home';

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
      </Switch>

    </div>



  );
}

export default App;
