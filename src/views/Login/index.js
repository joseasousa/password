import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { Creators as ActionCreators } from '../../redux/store/auth';

import './login.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        user: '',
        password: '',
      },
    };
  }

   handleChange = fieldname => (event) => {
     const form = {
       ...this.state.form,
     };
     form[fieldname] = event.target.value;
     this.setState({ form });
   }

  login = () => {
    const { form } = this.state;
    this.props.login(form);
  }

  componentDidMount() {

  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-form">
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
          Autentificação
            </Header>
            <Form size="large" onSubmit={this.login}>
              <Segment>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  value={email}
                  onChange={this.handleChange('email')}
                  type="email"
                  required
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange('password')}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}"
                  type="password"
                  required
                />

                <Button type="submit" color="teal" fluid size="large">
              Login
                </Button>
              </Segment>
            </Form>
            <Message>
              <Link to="cadastro">
            Não tem uma conta? Clique aqui para criar
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  login: (user) => {
    dispatch(
      ActionCreators.loginRequest(user),
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
