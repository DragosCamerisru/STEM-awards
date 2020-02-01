import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';
import imag_login from './components/spills.png';
import Singup from './components/Singup';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router,Link } from 'react-router-dom';
class Base extends Component {
    
    // constructor(props){
    //     super(props);
    //     this.state = { backgroundImage2 : Inimia };
    // }
    
    // changeColor = (backgroundImage2) => {
    //     this.setState({backgroundImage2});
    // };

    render() {
        return (
        <div id="main">
            <Router>
        <div>
                {/* <li>
                  <Link to="/" >
                    Login
                  </Link>
                </li>
                <Link
                    to="/singup"
                  >
                    singup
                  </Link> */}
                <Route exact path="/" component = {Login} />
                <Route path="/singup" component = {Singup} />
                </div>
            </Router>
        </div>
        );
    }

}
ReactDOM.render(<Base />, document.getElementById('root'));


serviceWorker.unregister();
