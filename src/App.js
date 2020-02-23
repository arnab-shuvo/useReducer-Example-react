import React , {useState, useEffect} from 'react';
import { StoreContainer } from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home'
import About from './About/About'

const App = () => {
  return(
    <Router>
      <StoreContainer>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </StoreContainer>
    </Router>
  )
}
  

export default App;
