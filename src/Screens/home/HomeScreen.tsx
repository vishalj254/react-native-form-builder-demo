import React from 'react';
import {View} from 'react-native';
import {AppFormBuilder} from '../../Components';
import useHomeScreen from './useHomeScreen';
import {Button, Appbar, DefaultTheme, Title, Divider} from 'react-native-paper';
import {Container, Body, Spacer} from './../../UIKIT';
import DemoScreen from './../demo/DemoScreen';
//@ts-ignore
import KeyboardSpacer from 'react-native-keyboard-spacer';

function HomeScreen() {
  const {form, formConfigArray, onSubmit, onReset} = useHomeScreen();

  return (
    <Container
      statusBarStyle={'light-content'}
      statusBarBackgroundColor={DefaultTheme.colors.primary}>
      <Appbar.Header>
        <Appbar.Content title="Demo" />
      </Appbar.Header>
      <Body style={{padding: 20}}>
        <Title>Form Builder</Title>
        <AppFormBuilder formConfigArray={formConfigArray} form={form} />
        <Button
          contentStyle={{height: 50}}
          mode={'contained'}
          onPress={onSubmit}>
          Submit
        </Button>
        <View style={{height: 20}}></View>
        <Button contentStyle={{height: 50}} mode={'outlined'} onPress={onReset}>
          Reset
        </Button>
        <Spacer size={20} />
        <Divider />
        <Spacer size={20} />
        <Title>Without Form Builder</Title>
        <DemoScreen />
      </Body>
      <KeyboardSpacer />
    </Container>
  );
}

export default HomeScreen;
