import react, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PageWrapper from './components/PageWrapper'

//Pages
import Home from './components/Pages/Home'
import About from './components/Pages/About'

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route
          path="/home"
          component={Home}
        />

        <Route
          path="/about"
          component={About}
        />
      <Route
          path="/"
          component={Home}
        />
      </PageWrapper>
    </Router>
  );
}

export default App;
