import React from 'react';
import { Card, Feed } from 'semantic-ui-react';

const Site = ({
  user, imageUrl, cite, url, empresa,
}) => (

  <Card>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image={imageUrl} />
          <Feed.Content>

            <Feed.Summary>
              <h2>
User:
{' '}
{empresa}
</h2>
              <h3>{url}</h3>
              {cite}
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

      </Feed>
    </Card.Content>
  </Card>
);

export default Site;
