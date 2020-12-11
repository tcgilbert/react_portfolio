import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Weather from './components/Weather';
import Github from './components/Github';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path="/" exact component={Home}/>
      <Route path="/weather" component={Weather} />
      <Route path="/github" component={Github} />
    </div>
    </BrowserRouter>
  );
}

export default App;
