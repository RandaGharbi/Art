import React, { Component } from 'react';
import { Grid, Header, Button, List } from 'semantic-ui-react';
import { decodeToken } from '../../utils/token';

class AppHeader extends Component {
  logout = () => {
    localStorage.removeItem('jwToken');
    window.location.reload();
  };
  render() {
    const token = localStorage.getItem('jwToken');
    const data = decodeToken(token);
    const { country, name, role } = data;
    return (
      <Header >
        <Grid>
          <Grid.Column width={4} textAlign="left">
            <List className="infoList">
              <List.Item icon="user" content={name} />
              <List.Item icon="marker" content={country} />
              <List.Item icon="id card outline" content={role} />
            </List>
          </Grid.Column>
          <Grid.Column width={8}>
          
          </Grid.Column>
          <Grid.Column width={4} textAlign="right">
            <Button
              className="logoutBtn"
              circular
              icon="log out"
              title="Deconnecter"
              size="massive"
              onClick={() => { this.logout(); }}
            >
            </Button>
          </Grid.Column>
        </Grid>
      </Header>
    );
  }
}

export default AppHeader;
