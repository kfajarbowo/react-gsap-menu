import React from 'react';
import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/solutions' component={Solutions} />
              <Route exact path='/contact-us' component={Contact} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

function About() {
  return <p>Nihongo is a creative company based in Tokyo, Japan</p>
}

function Solutions() {
  return <p>We can provide the best solution for you to build application</p>;
}

function Contact() {
  return <p>Tch Mendokusai めんどくさい.<br/>we still serve you even though your request is strange</p>;
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5> The <b>JAPAN 日本語</b>, is a fascinating country of economic and business proficiency, 
        rich culture, technical wizardry, spatial conundrums and 
        contradictions. Japan held on to the title of 
        the world’s second largest economy for more 
        than 50 years from 1968 to 2021.</h5>
      </div>
    </div>  
  )
}

export default App;
