import React from 'react'
import './index.css'
// import './bootstrap.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Contact from './screens/contact'
import Notfound from './screens/notfound';
import Home from './screens/home';
import About from './screens/about';
import Services from './screens/services';
import Projects from './screens/projects';
import Account from './screens/account';
import Brief from './screens/brief';
import Signin from './screens/signin';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className='body'>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/projects" component={Projects} />
            <Route path="/account" component={Account} />
            <Route path="/contact" component={Contact} />
            <Route path="/brief" component={Brief} />
            <Route path="/signin" component={Signin} />
            <Route component={Notfound} />
          </Switch>

         
        </div>
      </Router>
    )
  }
}



export default App