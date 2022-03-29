import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserActions from '../../store/reducers/user/actions';

import SettingsView from './SettingsView';

const SettingsContainer = props => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(UserActions.clearUserData());
    props.navigation.navigate('Auth');
  };
  return (
    <SettingsView
      /**
       * Options
       */

      /**
       * Methods
       */
      handleLogOut={handleLogOut}
    />
  );
};

export default SettingsContainer;
