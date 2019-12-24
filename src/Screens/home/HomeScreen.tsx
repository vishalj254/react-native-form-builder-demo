import React from 'react';
import {SafeAreaView, View, Button, Alert} from 'react-native';
import {AppFormBuilder} from '../../Components';
import useHomeScreen from './useHomeScreen';

function HomeScreen() {
  const {
    form,
    formConfigArray,
    formGlobalConfig,
    resetFormKey,
    updateResetFormKey,
  } = useHomeScreen();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 15}}>
        <AppFormBuilder
          formConfigArray={formConfigArray}
          formGlobalConfig={formGlobalConfig}
          form={form}
          key={resetFormKey}
        />
        <Button
          title={'Submit'}
          onPress={form.handleSubmit((data: any) => {
            Alert.alert(JSON.stringify(data));
          })}></Button>
        <Button
          title={'Reset'}
          onPress={() => {
            form.reset({
              email: 'test',
            });
          }}></Button>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
