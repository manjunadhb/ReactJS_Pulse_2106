import logo from './logo.svg';
import './App.css';
import Login from './pages/common/Login';
import SignUp from './pages/common/SignUp';
import { Route } from 'react-router-dom';
import Password from './pages/common/Password';

function App() {
  return (

    <div>
      {/* login component opens when pulse page opened */}
       <Route exact path="/" component={Login} />
       {/* new user to the pulse can create account  on click the signup  */}
       <Route exact path ="/signup"component={SignUp}/>
       <Route exact path ="/password" component={Password}/>

    </div>

  );
}

export default App;
