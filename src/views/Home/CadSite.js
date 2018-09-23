import React, { Component } from 'react';
import {
  Button, Form, Grid, Header, Input,
} from 'semantic-ui-react';
import { connect } from 'react-redux';


import { Creators as ActionCreators } from '../../redux/store/site';

class Cad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        site: '',
        url: '',
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

  cad = () => {
    const { form } = this.state;
    this.props.signin(form);
  }

  componentDidMount() {

  }

  render() {
    const {
      site, url, user, password,
    } = this.state;
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >

          <Grid.Column style={{ maxWidth: 650 }}>
            <Header as="h2" color="teal" textAlign="center">
                Cadastrar Site
            </Header>

            <Form size="large" onSubmit={this.cad}>

              <Input
                fluid
                value={site}
                iconPosition="left"
                onChange={this.handleChange('site')}
                placeholder="Site"
                required
              />
              <Input
                fluid
                value={url}
                iconPosition="left"
                placeholder="Url"
                onChange={this.handleChange('url')}
                required
              />
              <Input
                fluid
                value={user}
                iconPosition="left"
                placeholder="User"
                onChange={this.handleChange('user')}
                required
              />

              <Input
                fluid
                value={password}
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange('password')}
                type="password"
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
  site: state.site.site,
});

const mapDispatchToProps = dispatch => ({
  signin: (site) => {
    dispatch(
      ActionCreators.createSiteRequest(site),
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cad);
