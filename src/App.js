import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/home/homePage/HomePage';
import SingleProject from './components/home/servicePages/SingleProject';
import ServiceDetails from './components/home/services/serviceDetails/ServiceDetails';
import DataProvider from './contexts/dataProvider/DataProvider';
import AllService from './components/pages/allService/AllService';

function App() {
  const posts = [
    { id: 1, title: 'First', content: 'Hello world!' },
    { id: 2, title: 'Second', content: 'Hello again!' },
  ];
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path={'/services/:serviceId'}>
              <ServiceDetails />
            </Route>
            <Route path="/allService">
              <AllService />
            </Route>
          </Switch>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
