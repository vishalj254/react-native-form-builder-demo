import React from 'react';
import {View, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {TextInput, HelperText, Button} from 'react-native-paper';
import {Spacer} from '../../UIKIT';

type FormType = {
  firstName: string;
  lastName: string;
};

function HomeScreen() {
  const {control, handleSubmit, errors, reset, getValues} = useForm<FormType>({
    mode: 'onChange',
    defaultValues: {
      firstName: 'Test',
      lastName: 'Test',
    },
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
      <Spacer size={10} />
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
      <Spacer size={20} />
      <Button
        contentStyle={{height: 50}}
        mode={'contained'}
        onPress={handleSubmit((data: any) => {
          console.log(data);
          return data;
        })}>
        Submit
      </Button>
      <View style={{height: 20}}></View>
      <Button
        contentStyle={{height: 50}}
        mode={'outlined'}
        onPress={() => {
          const data = {
            firstName: 'Reset Test',
            lastName: 'Reset Test',
          };
          reset(data);
        }}>
        Reset
      </Button>
    </View>
  );
}

export default HomeScreen;
