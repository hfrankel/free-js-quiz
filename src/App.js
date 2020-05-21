import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import indexStyles from './assets/styles/index.css';
import Header from './components/Header';
import HomePage from './pages/Home';
import HowItWorksPage from './pages/HowItWorks';
import QuizPage from './pages/Quiz';

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/howitworks" component={HowItWorksPage} />
          <Route exact path="/quiz" component={QuizPage} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
