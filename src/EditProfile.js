import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateEmail } from './ducks/reducer';

class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
    this.updateEmail = this.updateEmail.bind(this);
    this.editProfile = this.editProfile.bind(this);
  }

  updateEmailHandler(event) {
    this.setState({
      email: event.target.value,
    });
  }

  editProfile() {
    const { updateEmail, history } = this.props;
    console.log(updateEmail)
    axios.put('/api/user', {
      email: this.state.email,
    }).then(response => {
      // Update user in redux store.
      updateEmail(response.data.user.email);
      history.push('/profile');
    })
  }

  render() {
    return (
      <div>
        <h1>Edit Profile</h1>
        <input onChange={this.updateEmailHandler} value={this.state.email} />
        <button onClick={this.editProfile}>Update</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateEmail,
};

export default connect(null, mapDispatchToProps)(EditProfile);