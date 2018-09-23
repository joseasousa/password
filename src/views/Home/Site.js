import React, { Component } from 'react';
import {
  Card, Feed, Image,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import api from '../../services/api';


class Site extends Component {
    state = {
      img: {},
    };


    async componentDidMount() {
      const { token, site } = this.props;
      const img = await api.get(`/logo/${site.url}`,
        {
          headers: { authorization: token },
          responseType: 'arraybuffer',
        })
        .then((response) => {
          const image = btoa(
            new Uint8Array(response.data)
              .reduce((data, byte) => data + String.fromCharCode(byte), ''),
          );
          return `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
        });

      this.setState({ img });
    }


  onChange = () => {
    this.setState({ copied: false });
  };

  onClick = ({ target: { innerHTML } }) => {
    console.log(`Clicked on "${innerHTML}"!`); // eslint-disable-line
  };

  onCopy = () => {
    this.setState({ copied: true });
  };

  render() {
    const { site } = this.props;
    const { img } = this.state;


    return (
      <CopyToClipboard
        onCopy={this.onCopy}
        text={site.password}
      >
        <Card>
          <Card.Content>
            <Feed action={{
              content: 'Copy',
            }}
            >
              <Feed.Event>
                <Feed.Content>
                  <Image
                    size="tiny"
                    src={img}
                  />
                </Feed.Content>
                <Feed.Content>

                  <Feed.Summary>
                    <b>Site: </b>
                    {site.site}
                  </Feed.Summary>
                  <Feed.Summary>
                    <b>Url: </b>
                    {site.url}
                  </Feed.Summary>
                  <Feed.Summary>
                    <b>User: </b>
                    {site.user}
                  </Feed.Summary>

                  <Feed.Summary>
                    <b>Pass: </b>
                    {site.password}
                  </Feed.Summary>

                </Feed.Content>
              </Feed.Event>

            </Feed>
          </Card.Content>
        </Card>
      </CopyToClipboard>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(Site);
