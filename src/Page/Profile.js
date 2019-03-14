import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../Store';
import { withRouter } from 'react-router-dom';


class Profile extends Component {
    render() {
        if (!this.props.is_login) {
            return <Redirect to={{ pathname: '/LogIn' }} />;
        } else {
            return (
                <div className='article-content-wrapper row info-box'>
                <section>
                    <h1 style={{ textAlign : 'center', marginTop:'40px' }}>Profile</h1>
                    <p>
                        <label className='form-label'>Email: </label><br/>
                        <strong><i>{this.props.email}</i></strong>
                    </p>
                    <p>
                        <label className='form-label'>Full Name:</label><br/>
                        <strong><i>{this.props.full_name}</i></strong>
                    </p>
                </section>
                </div>
            );
        }
    };  
}

export default connect(
    "is_login, email, full_name", actions)
(withRouter(Profile));

// export default Profile;