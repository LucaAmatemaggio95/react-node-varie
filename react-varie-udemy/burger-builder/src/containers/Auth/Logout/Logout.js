import React, {Component, useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/index';

const logout = (props) => {

    const {onLogout} = props;

    // useEffect(() => {
    //     onLogout();
    // }, [onLogout]);

    
        return (
            <Redirect to="/" />
        );
    

}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.authLogout())
    }
}

export default connect(null, mapDispatchToProps) (logout);