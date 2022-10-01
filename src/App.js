import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

export default function App() {
    return (
      <Router>
        <Route path="/" component={Home} />

      </Router>
    );
}