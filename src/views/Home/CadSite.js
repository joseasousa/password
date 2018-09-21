import React, { Component } from 'react';
import {
  Button, Form, Grid, Header, Input,
} from 'semantic-ui-react';
import { connect } from 'react-redux';


import { Creators as ActionCreators } from '../../redux/store/auth';

class Cad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        email: '',
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

  signin = () => {
    secureStorage.setItem(1, this.state.form);
  }

  componentDidMount() {
    const itens = Object.keys(secureStorage)
      .map(k => secureStorage.getItem(k));
    console.log(itens);
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >

          <Grid.Column style={{ maxWidth: 650 }}>
            <Header as="h2" color="teal" textAlign="center">
          Cadastro
            </Header>

            <Form size="large" onSubmit={this.signin}>

              <Input
                fluid
                icon="user"
                value={name}
                iconPosition="left"
                onChange={this.handleChange('name')}
                placeholder="Nome"
                required
              />
              <Input
                fluid
                icon="user"
                value={email}
                iconPosition="left"
                placeholder="E-mail address"
                onChange={this.handleChange('email')}
                type="email"
                required
              />
              <Input
                fluid
                value={password}
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange('password')}
                type="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required
              />

              <Button type="submit" color="teal" fluid size="large">
              Cadastrar
              </Button>

            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  signin: (user) => {
    dispatch(
      ActionCreators.createAuthRequest(user),
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cad);
