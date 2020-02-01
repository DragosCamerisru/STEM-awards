import React from 'react';
import styles from './Login.module.css';
import cx from 'classnames';
import pills from './spills.png';
import MetaTags from 'react-meta-tags';
import { Route, BrowserRouter as Router,Link } from 'react-router-dom';
import Singup from './Singup';
var stl = {
  backgroundImage: `url(${pills})`,
}

class Login extends React.Component {
  
    render() {
    return (
        <div style={stl}>
          {/* <Router>s */}
            <MetaTags>
                <title>Meddoc</title>
                <meta charset="UTF-8"/>
                <meta name = "description" content = " "/>
                <meta name = "keywords" content = "medical, report, medical history, doctor, patient, ill, heal, health, e-health, diagnostic, prescription, treatement, emergency, emergency room, hospital, sick, sickness, illness, medical test, results"/>
                <meta name = "author" content = "Draganescu Ioana-Lisandra, Palagesiu Cezar-Ioan, Poenaru Diana-Mihaela"/> 
                <meta http-equiv="refresh" content="500"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </MetaTags>
        
        <div className = {styles.Container1}>
        <div className = {styles.Container2}>
              <h1 className={styles.headline}>Login</h1>
            <p className={styles.nuaidejacont}>Dont you have an account?<Link to="/singup" className="--forgotpass">Sing in</Link></p>
        </div>
          <div className ={cx(styles.Container3,styles.em)}>
            <label className = {styles.email2}>E-mail</label>
          <input className={styles.email} type = "text" placeholder = "Enter E-mail" name = "email" required/>
          </div>
          <div className = {cx(styles.Container3,styles.ps)}>
            <label className = {styles.password2}>Password</label>
          <input className={styles.password} type = "password" placeholder = "Enter Password" name = "password" required/>
          </div>
          <div className={styles.left}>
          <label className={styles.rememberme}>
              <p className={styles.rememb}>Remember me</p>
              <input type="checkbox" name="checkbox"/>
              <span className={styles.checkmark}></span>
          </label>
          </div>
          <div className={styles.right}>
          <p className={styles.forgotpass2}><Link to="/password-reset" className={styles.forgotpas2s}>Forgot password?</Link></p>
          </div>
        <div className={styles.as}>
            <button className={styles.submit} type = "submit">Login</button>
        </div>
      </div>
             {/* <Route exact path="/singup" component = {Singup} />
      </Router> */}
      </div>
    );
  }
}
export default Login;
