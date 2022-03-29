import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { animateLayout } from '@tapston/react-native-animation';

import AuthorizationView from './AuthorizationView';
import UserActions from '../../store/reducers/user/actions';

const AuthorizationContainer = props => {
  const dispatch = useDispatch();
  const userList = useSelector(store => store.user.userList);

  const [selectedType, setSelectedType] = useState('signIn');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const setType = type => {
    animateLayout();
    setSelectedType(type);
  };

  const handleSignUp = () => {
    if (userList.find(el => el.email === email)) {
      Alert.alert('User already exist');
      return;
    }
    const $userData = {
      email,
      password,
      nickname,
      score: 0,
    };
    const $userList = [...userList, $userData];

    dispatch(UserActions.registerNewUser($userData, $userList));
    props.navigation.navigate('Drawer');
  };

  const handleSignIn = () => {
    const currentUser = userList.find(el => el.email === email);
    if (!currentUser) {
      Alert.alert('User does not exist');
      return;
    }
    if (currentUser.password !== password) {
      Alert.alert('Password does not match');
      return;
    }
    dispatch(UserActions.signIn(currentUser));
    props.navigation.navigate('Drawer');
  };
  return (
    <AuthorizationView
      /**
       * Options
       */
      selectedType={selectedType}
      email={email}
      password={password}
      nickname={nickname}
      /**
       * Methods
       */
      setSelectedType={setSelectedType}
      handleSignIn={handleSignIn}
      handleSignUp={handleSignUp}
      setType={setType}
      setEmail={setEmail}
      setNickname={setNickname}
      setPassword={setPassword}
    />
  );
};

export default AuthorizationContainer;
