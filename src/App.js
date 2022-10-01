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
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/navbar" component={Navbar} />
        <Route path="/posts" component={Posts} />

      </Router>
    );
}