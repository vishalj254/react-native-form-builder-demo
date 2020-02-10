import React from 'react';
import {SafeAreaView, View, Button, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {TextInput, HelperText} from 'react-native-paper';

type FormType = {
  firstName: string;
  lastName: string;
};

function HomeScreen() {
  const {control, handleSubmit, errors, reset, getValues} = useForm<FormType>({
    mode: 'onChange',
    // defaultValues: {
    //   firstName: 'Test',
    //   lastName: 'Test',
    // },
  });
  const onSubmit = (data: FormType) => {
    Alert.alert(JSON.stringify(data));
  };
  const onChange = (args: any) => {
    return {
      value: args[0].nativeEvent.text,
    };
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 15}}>
        <View>
          <Controller
            as={
              <TextInput
                mode={'outlined'}
                label={'First Name'}
                error={errors.firstName ? true : false}
              />
            }
            control={control}
            name="firstName"
            onChange={onChange}
            rules={{required: true}}
            defaultValue=""
          />
          {errors.firstName && (
            <HelperText style={{color: 'red'}}>This is required.</HelperText>
          )}

          <Controller
            as={
              <TextInput
                mode={'outlined'}
                label={'Last name'}
                error={errors.lastName ? true : false}
              />
            }
            control={control}
            name="lastName"
            onChange={onChange}
            defaultValue=""
            rules={{required: true}}
          />
          {errors.lastName && (
            <HelperText style={{color: 'red'}}>This is required.</HelperText>
          )}
        </View>
        <Button
          title={'Submit'}
          onPress={handleSubmit((data: any) => {
            console.log(data);
            return data;
          })}></Button>
        <Button
          title={'Reset'}
          onPress={() => {
            const data = {
              firstName: 'Reset Test',
              lastName: 'Reset Test',
            };
            reset(data);
          }}></Button>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
