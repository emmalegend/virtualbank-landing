import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/index';
import Footer from './components/Footer';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/" component={Home} exact />
     </Switch>
     <Footer />
   </Router>
  );
}

export default App;
