import React from 'react';
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

const Login = () => (
  <div className="login-form">
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Autentificação
        </Header>
        <Form size="large">
          <Segment>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              type="email"
              required
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}"
              type="password"
              required
            />

            <Button color="teal" fluid size="large">
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

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  signin: (user) => {
    dispatch(
      ActionCreators.loginRequest(user),
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
