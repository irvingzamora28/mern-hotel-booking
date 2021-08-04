import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Home from './pages/Home';
import Room from './pages/SingleRoom';
import Rooms from './pages/Rooms';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms" component={Rooms}></Route>
        <Route exact path="/rooms/:slug" component={Room}></Route>
        <Route component={Error} ></Route>
      </Switch>
    </>
  );
}

export default App;
