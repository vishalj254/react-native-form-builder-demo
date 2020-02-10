import React from 'react';
import {View} from 'react-native';
import {AppFormBuilder} from '../../Components';
import useHomeScreen from './useHomeScreen';
import {Button, Appbar, DefaultTheme} from 'react-native-paper';
import {Container, Body} from './../../UIKIT';

function HomeScreen() {
  const {form, formConfigArray, onSubmit, onReset} = useHomeScreen();

  return (
    <Container
      statusBarStyle={'light-content'}
      statusBarBackgroundColor={DefaultTheme.colors.primary}>
      <Appbar.Header>
        <Appbar.Content title="Form Builder Demo" />
      </Appbar.Header>
      <Body style={{padding: 20}}>
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
      </Body>
    </Container>
  );
}

export default HomeScreen;
