import React, { Component } from 'react';

import services from '../services';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    services.getAllUsers()
      .then(users => {
        this.setState({users});
      });
  }

  componentWillUpdate(nextState) {
    if(nextState.users && nextState.users.length != 0) {
      return true;
    }
  }

  renderAllUsers(users){
    return users.map(user => {
      return (
        <tr key={user._id}>
          <td>{user.firstname}</td>
          <td>{user.lastname}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>{user.username}</td>
        </tr>
      )
    });
  }

  render() {
    return (
      <div>
        <h1>All Users</h1>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.renderAllUsers(this.state.users)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
