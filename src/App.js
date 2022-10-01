import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Services from './components/Services';

export default function App() {
  return (

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services">
            <Services number="5" />
          </Route>
         {/* <Route exact path="/services" render={() => <Services number="5" />} /> */}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/posts/:category" component={Posts} />

          <Route component={Error} />
        </Switch>
      </Router>

    );
}