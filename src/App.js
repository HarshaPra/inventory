import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import User from './components/pages/User';
import Login from './components/pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route path='/user' Component={User}></Route>
        <Route path='/login' Component={Login}></Route>
      </Routes>
    </Router>
  );
}

export default App;
