import { Map } from 'immutable';

export const INITIAL_PROFILE_STATE = Map({
  userID: null,
  name: null,
  address: null,
});

const profile = (state = INITIAL_PROFILE_STATE, action) => {
  switch (action.type) {
    case 'PROFILE_ADDRESS_CHANGE':
      return state.merge(Map({
        address: action.payload.address,
      }));

    case 'PROFILE_NAME_CHANGE':
      return state.merge(Map({
        name: action.payload.name,
      }));

    case 'PROFILE_USER_ID_CHANGE':
      return state.merge(Map({
        userID: action.payload.userID,
      }));

    default:
      return state;
  }
};


export default profile;