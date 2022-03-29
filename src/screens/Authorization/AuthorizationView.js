import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import RNStyles from '@tapston/react-native-styles';
import { colors } from '../../styles';
import { Button } from '../../components';

const AuthorizationView = props => {
  const isButtonDisabled =
    !props.email.length ||
    !props.password.length ||
    (props.selectedType === 'signUp' && !props.nickname.length);
  return (
    <ScrollView scrollEnabled={false} contentContainerStyle={styles.container}>
      <View style={styles.authTypeButtonsContainer}>
        <TouchableOpacity
          onPress={() => props.setType('signIn')}
          style={styles.authTypeButton}>
          <Text
            style={[
              styles.titles,
              props.selectedType !== 'signIn' && styles.decoratedText,
            ]}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setType('signUp')}
          style={styles.authTypeButton}>
          <Text
            style={[
              styles.titles,
              props.selectedType !== 'signUp' && styles.decoratedText,
            ]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        {props.selectedType === 'signUp' && (
          <TextInput
            style={styles.inputStyles}
            selectionColor={colors.white}
            value={props.nickname}
            onChangeText={text => props.setNickname(text)}
            placeholder="Nickname"
            placeholderTextColor={`${colors.white}40`}
          />
        )}
        <TextInput
          style={styles.inputStyles}
          selectionColor={colors.white}
          value={props.email}
          onChangeText={text => props.setEmail(text.toLowerCase())}
          placeholder="Email"
          placeholderTextColor={`${colors.white}40`}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.inputStyles}
          selectionColor={colors.white}
          value={props.password}
          onChangeText={text => props.setPassword(text)}
          placeholder="Password"
          placeholderTextColor={`${colors.white}40`}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={
            props.selectedType === 'signUp'
              ? props.handleSignUp
              : props.handleSignIn
          }
          disabled={isButtonDisabled}
          value={props.selectedType === 'signUp' ? 'Sign Up' : 'Sign In'}
          containerStyle={{
            backgroundColor: isButtonDisabled
              ? `${colors.white}80`
              : colors.white,
          }}
          textColor={colors.black}
        />
      </View>
    </ScrollView>
  );
};

const styles = RNStyles.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.main,
  },

  authTypeButtonsContainer: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-between',
  },
  authTypeButton: {
    borderWidth: 1,
    borderColor: `${colors.white}80`,
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titles: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  decoratedText: {
    opacity: 0.6,
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: `${colors.white}80`,
    width: '75%',
    padding: 16,
    paddingBottom: 8,
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: `${colors.white}40`,
    width: '100%',
    height: 36,
    padding: 8,
    color: colors.white,
    marginBottom: 8,
  },

  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 16,
    padding: 16,
  },
});

export default AuthorizationView;
