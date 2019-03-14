import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'unistore/react';
import { actions } from '../Store';
import { withRouter } from 'react-router-dom';
import '../Style/bootstrap.min.css';
import '../Style/style.css';
import logo from '../logo.svg';

class LogIn extends Component {
    doLogin = () => {
        this.props.postLogin().then(()=> {
            console.log('this', this);
            this.props.history.replace('/Profile');
        });
    };
    
    render () {
        console.log('signin props', this.props);
        return (
            <section className="content signin" style={{textAlign:'center', marginTop:'50px', marginBottom:'50px'}}>
                <form onSubmit={e => e.preventDefault()}>
                <img src={logo} class="logo-footer" style={{ width: '5%', height: '5%'}}/>
                <h4>Sign In</h4>
                <div>
                    <input
                        type='text'
                        name='username'
                        placeholder='username'
                        onChange={e => this.props.setField(e)}
                    />
                </div>
                <div>
                    <input
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={e => this.props.setField(e)}
                    />
                </div>
                <button onClick={() => this.doLogin()}>Sign In</button>
            </form>
            </section>
        )
    }
}

export default connect(
    "is_login, username, password", actions)
(withRouter(LogIn));

// export default SignIn;