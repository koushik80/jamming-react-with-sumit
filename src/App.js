import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Services from './components/Services';

export default function App() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/navbar" component={Navbar} />
        <Route exact path="/posts" component={Posts} />

      </Router>
    );
}