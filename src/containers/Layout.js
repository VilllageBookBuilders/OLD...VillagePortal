import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import '../Style.css'
import logo from '../vbb-logo.png'

const Layout = (props) => {
    return(
        <body style={{backgroundColor: "#fffff6", padding: "50px"}}>
            <header>
                <img src={logo} alt='Logo' style={{width: "300px"}} />
                {/* <button type="button" style={{textAlign: 'center'}}>Click Me!</button> */}
                <br />
                <br />
                <hr style={{ border: "2px solid #FF914D" }} />
                <br />
            </header>

            <div className="site-layout-content">
                {props.children}
            </div>

            <footer style={{textAlign: 'center'}}>&copy; Village Book Builders  |  All Rights Reserved</footer>
        </body>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Layout));