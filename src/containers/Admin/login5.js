import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { connect } from 'react-redux';
import {loginUser} from '../../actions'


class Login extends Component {

  state = {
      email:'',
      password:'',
      error:'',
      success:false
  }

  handleInputEmail = (event) => {
    this.setState({email:event.target.value})
  }

  handleInputPassword = (event) => {
    this.setState({password:event.target.value})
  }



    submitForm = (e) =>{
        e.preventDefault();
        this.props.dispatch(loginUser(this.state))
    }


  render() {

    let user = this.props.user;

    return (
      <div>
      <form onSubmit={this.submitForm}>
      <div>
      <input
          type="email"
          placeholder="Enter your email"
          value={this.state.email}
          onChange={this.handleInputEmail}
      />

      <input
          type="password"
          placeholder="Enter your password"
          value={this.state.password}
          onChange={this.handleInputPassword}
      />
      </div>
      <button type="submit">Login</button>

      {
        user.login ?
        <div>{user.login.message}</div>
        :null
      }

      </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(Login)
