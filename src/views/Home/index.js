import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Site from './Site';

const users = require('./Users.json');

const Home = () => (
  <Container>

    <Card.Group>
      {
        users.map(item => (
          <Site
            key={item.id}
            imageUrl={item.image}
            empresa={item.empresa}
            cite={item.cite}
            email={item.email}
          />
        ))
      }

    </Card.Group>

  </Container>
);

const mapStateToProps = state => ({
  people: state.people,
});
export default connect(mapStateToProps)(Home);
