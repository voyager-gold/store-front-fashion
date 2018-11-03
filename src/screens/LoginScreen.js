import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import { PRODUCTS_SCREEN, startSingleScreenApp } from './';
import { SocialButton } from '../components';

import colors from '../colors';
import fonts from '../fonts';
import i18n from '../i18n';
import imgAppIcon from '../../assets/images/app-icon.png';
import imgGoogleIcon from '../../assets/images/google-icon.png';


type Props = {};
class LoginScreen extends Component<Props> {

  static navigatorStyle = {
    navBarHidden: true
  };

  onPressButton() {
    startSingleScreenApp(PRODUCTS_SCREEN);
  }

  render() {
    const {
      containerStyle,
      welcomeViewStyle,
      imageStyle,
      titleStyle,
      buttonStyle
    } = styles;

    return (
      <View style={containerStyle}>
        <View style={welcomeViewStyle}>
          <Image style={imageStyle} source={imgAppIcon} />

          <Text style={titleStyle}>
            {i18n.t('login.welcome')}
          </Text>
        </View>

        <SocialButton
          style={buttonStyle}
          color={colors.red}
          icon={imgGoogleIcon}
          title={i18n.t('login.button')}
          onPress={() => this.onPressButton()}
        />
      </View>
    );
  }

}

const margin = 14;
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.while,
    margin
  },
  welcomeViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: 100,
    width: 100,
    margin
  },
  titleStyle: {
    fontFamily: fonts.regular,
    color: colors.black,
    fontSize: 24,
    margin
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 0
  }
});

export default LoginScreen;
