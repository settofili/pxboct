import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loginUser} from '../../actions'


class Login extends Component {


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
      <h1>login page</h1>
      <button type="submit">Login</button>
      <div>
      {
        user.login ?
        <div>{user.login.message}</div>
        :null
      }
      </div>
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






<Section>
  <Container>
    <Wrap>
      <ColumnLeft>
        <Content
          data-aos='fade-right'
          data-aos-duration='1200'
          data-aos-delay='300'
          data-aos-once='true'
          data-aos-anchor-placement='center bottom'
        >
          <h1>Sign up with your Broker ID</h1>

          <p>
            You need to be a licensed broker to sign up for membership.
            Kindly contact the nearest real estate licensing agency to get your broker ID.
          </p>
          <Button to='/login'>Sign Up</Button>
        </Content>

      </ColumnLeft>

      <ColumnLeft>
        <Content
          data-aos='fade-right'
          data-aos-duration='1200'
          data-aos-delay='300'
          data-aos-once='true'
          data-aos-anchor-placement='center bottom'
        >
          <h1>Sign up with your Broker ID</h1>

          <p>
            You need to be a licensed broker to sign up for membership.
            Kindly contact the nearest real estate licensing agency to get your broker ID.
          </p>

          <Button to='/login'>Sign Up</Button>
        </Content>
      </ColumnLeft>
    </Wrap>
  </Container>
</Section>
