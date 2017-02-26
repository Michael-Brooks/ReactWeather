var React = require('react');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} =  require('react-router');
var Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <IndexRoute component={Weather} />
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
    </Route>
  </Router>,
  document.getElementById('app')
);
