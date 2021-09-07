import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Login'
import SendData from './SendData';
import SignUp  from './SignUp';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/userpost" component={SendData} />
    
    </Switch>
  </Router>
  );
}

export default App;
