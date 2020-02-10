import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {AppFormBuilder} from '../../Components';
import useHomeScreen from './useHomeScreen';
import {Button} from 'react-native-paper';

function HomeScreen() {
  const {form, formConfigArray, onSubmit, onReset} = useHomeScreen();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 15}}>
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
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
