import React, { Component } from 'react';

import { Card } from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Site from './Site';

import './Home.css';

import { Creators as SiteCreators } from '../../redux/store/site';

class Home extends Component {
  componentDidMount() {
    this.props.siteRequest();
  }

  render() {
    const { sites } = this.props;
    return (
      <div>
        <h1>Sites:</h1>
        <Card.Group centered>
          {sites.map(site => (
            <Site
              key={site.id}
              site={site}
            />
          ))
      }

        </Card.Group>


        <div>
          <Link to="/cadSite" className="ui button right">Adicionar Site</Link>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  sites: state.site.sites,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  siteRequest: () => dispatch(SiteCreators.siteRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
