/**
 * @prettier
 */

import { store } from '../../../store';

import { updateCurrentUser, clearCurrentUser, updateUserList } from './user';

/**
 * Redux actions for user.
 */
class UserActions {
  static registerNewUser(userData, userList) {
    return async dispatch => {
      dispatch(updateCurrentUser(userData));
      dispatch(updateUserList(userList));
    };
  }
  static updateUserData(userData) {
    const $userList = store.getState().user.userList;
    const $currentUser = store.getState().user.currentUser;
    const otherUsers = $userList.filter(el => el.email !== $currentUser.email);
    return async dispatch => {
      dispatch(updateCurrentUser(userData));
      dispatch(
        updateUserList([...otherUsers, { ...$currentUser, ...userData }]),
      );
    };
  }
  static signIn(userData) {
    return async dispatch => {
      dispatch(updateCurrentUser(userData));
    };
  }
  static clearUserData() {
    return async dispatch => {
      dispatch(clearCurrentUser());
    };
  }
}

export default UserActions;
