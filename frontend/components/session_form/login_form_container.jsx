import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session, errors}) => {
  return {
    errors: errors.session,
    navLink: <Link to="/signup">Sign Up</Link>,
    currentUser: Boolean(session.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
