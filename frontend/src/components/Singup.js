import React from 'react';
import styles from './Singup.module.css';
import cx from 'classnames';
import struct from './structure.jpg';
import MetaTags from 'react-meta-tags';
import { Route, BrowserRouter as Router,Link } from 'react-router-dom';

class Singup extends React.Component {
    render() {
    return (
        <div classname="singup">
            <MetaTags>
                <title>Meddoc</title>
                <meta charset="UTF-8"/>
                <meta name = "description" content = " "/>
                <meta name = "keywords" content = "medical, report, medical history, doctor, patient, ill, heal, health, e-health, diagnostic, prescription, treatement, emergency, emergency room, hospital, sick, sickness, illness, medical test, results"/>
                <meta name = "author" content = "Draganescu Ioana-Lisandra, Palagesiu Cezar-Ioan, Poenaru Diana-Mihaela"/> 
                <meta http-equiv="refresh" content="500"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </MetaTags>
            <div className={styles.Container1}>
        <div className = {styles.Container2}>
            <h1 className = {styles.headline}> Create an account </h1>
        </div>
        <div className = {styles.Container2}>
            <div className = {styles.ContainerL}>
                <label className = {styles.firstname_label} for = "first-name">First Name</label>
                <div className = {styles.firstname_div}>
                    <input className = {styles.firstname_input} type = "text" placeholder = "Enter First Name" name = "first-name" required/>
                </div> 
                <label className = {styles.lastname_label} for = "last-name">Last Name</label>
                <div className = {styles.lastname_div}>
                    <input className = {styles.lastname_input} type = "text" placeholder = "Enter Last Name" name = "last-name" required/>
                </div> 
                <label className = {styles.email_label} for = "email">Enter your email</label>
                <div className = {styles.email_div}>
                    <input className = {styles.email_input} type = "text" placeholder = "Enter your email adress" name = "email" required/>
                </div> 
            </div>
	        <div className = {styles.ContainerR}>
                <label className = {styles.confirmpassword_label} for = "confirm-email">Confirm your email address</label>
                <div className = {styles.confirmemail_div}>
                    <input className = {styles.confirmemail_input} type = "text" placeholder = "Re-enter your email" name = "confirm-email" required/>
                </div> 
                <label className = {styles.password_label} for = "password">Password</label>
                <div className = {styles.password_div}>
                    <input className = {styles.password_input} type = "password" placeholder = "Enter your password" name = "password" required/>
                </div> 
                <label className = {styles.confirmpassword_label} for = "confirm-password">Confirm password</label>
                <div className = {styles.confirmpassword_div}>
                    <input className = {styles.confirmpassword_input} type = "password" placeholder = "Re-enter password" name = "confirm-password" required/>
                </div> 
            </div>
      </div>
      <div className = {styles.Container2}>
            <button className = {styles.button}  type="submit"> Sign In </button>
      </div>
            </div>
      </div>
    );
  }
}

export default Singup;
