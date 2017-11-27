import axios from 'axios';

module.exports = {
  getAllUsers: function() {
    return axios.get('/api/users')
    .then(users => {
      return users.data
    })
    .catch(err => {
      console.log(err);
      return err;
    });
  }
}
