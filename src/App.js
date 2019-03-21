import React from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import EmailList from "./pages/EmailList";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.scss";

function Writing() {
  return (
    <div id="page-writing">
      <h2>Writing</h2>
      <p>
        <a href="http://discretethought.tumblr.com/">Tumbler</a>
      </p>
      <p>
        <a href="http://twitter.com/rkohr">Twitter</a>
      </p>
    </div>
  );
}

function App(props) {
  console.log(props);
  return (
    <Router>
      <div id="router">
        <banner>
          <div id="title" to="/about">
            <h1>Rob Kohr's Website </h1>
          </div>
          <div id="summary">
            <quote>
              My father says almost the whole world's asleep. Everybody you
              know, everybody you see, everybody you talk to. He says only a few
              people are awake. And they live in a state of constant total
              amazement.
            </quote>
            <p> -Joe Vs. The Volcano</p>
          </div>
        </banner>

        <div id="nav">
          <NavLink id="about-link" activeClassName="selected" to="/about">
            <div className="circle icon-about">
              <span>About</span>
            </div>
          </NavLink>
          <NavLink id="projects-link" exact activeClassName="selected" to="/">
            <div className="circle icon-projects">
              <span>Projects</span>
            </div>
          </NavLink>
          <NavLink id="writing-link" activeClassName="selected" to="/writing/">
            <div className="circle icon-writing">
              <span>Writing</span>
            </div>
          </NavLink>
          <NavLink
            id="mailing-list-link"
            activeClassName="selected"
            to="/email-list/"
          >
            <div className="circle icon-email-list">
              <span> Mailing List</span>
            </div>
          </NavLink>
        </div>
        <div id="content">
          <Route path="/" exact component={Projects} />
          <Route path="/about" exact component={About} />
          <Route path="/projects/" component={Projects} />
          <Route path="/writing/" component={Writing} />
          <Route path="/email-list/" component={EmailList} />
        </div>
      </div>
    </Router>
  );
}

export default App;
