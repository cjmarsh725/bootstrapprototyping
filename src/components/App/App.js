import React from 'react';
import { BrowserRouter as Router, 
          Link, NavLink, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Nav>
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/journal">
              Journal
            </Nav.Link>
            <Nav.Link as={NavLink} to="/schedule">
              Schedule
            </Nav.Link>
            <Nav.Link as={NavLink} to="/affirmation">
              Affirmation
            </Nav.Link>
          </Nav>
        </Navbar>
        <Route path="/" exact component={Home} />
        <Route path="/journal" component={Journal} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/affirmation" component={Affirmation} />
      </div>
    </Router>
  );
}

function Home() {
  return <div>Home page</div>
}

function Journal() {
  return <div>Journal page</div>
}

function Schedule() {
  return <div>Schedule page</div>
}

function Affirmation() {
  return <div>Affirmation page</div>
}

export default App;
