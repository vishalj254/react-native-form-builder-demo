import React, {useEffect, Fragment, useState} from 'react';
import {View} from 'react-native';
import {RHFInput} from 'react-hook-form-input';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
  TextFieldProps,
} from 'react-native-material-textfield';
import {ValidationOptions} from 'react-hook-form-input/dist/types';
import {FormContextValues} from 'react-hook-form/dist/contextTypes';
import {TextInput} from 'react-native-paper';

type FormConfigType = {
  name: string;
  type: 'basic-input' | 'outlined-input' | 'filled-input';
  label?: string;
  rules?: ValidationOptions;
  textInputProps?: TextFieldProps;
  handleSubmit: any;
};

export type FormConfigArrayType = Array<FormConfigType | any>;

export type FormGlobalConfigType = {
  mode: 'onChange' | 'onBlur' | 'onSubmit';
};

type AppFormBuilderPropType = {
  formConfigArray: FormConfigArrayType;
  formGlobalConfig: FormGlobalConfigType;
  form: FormContextValues;
};

function AppFormBuilder(props: AppFormBuilderPropType) {
  const {
    formConfigArray,
    formGlobalConfig,
    register,
    setValue,
    onChange,
    inputSelector,
    formData,
  } = useAppFormBuilder(props);

  const renderAppBuilderItem = (input: FormConfigType, index: number) => (
    <View key={index} style={{marginBottom: 15}}>
      <RHFInput
        register={register}
        setValue={setValue}
        // as={}
        as={inputSelector(input)}
        onChangeEvent={onChange}
        name={input.name}
        rules={input.rules}
        mode={formGlobalConfig.mode}
        // defaultValue={formData[input.name]}
      />
    </View>
  );

  return <Fragment>{formConfigArray.map(renderAppBuilderItem)}</Fragment>;
}

function useAppFormBuilder({
  formConfigArray,
  formGlobalConfig,
  form,
}: AppFormBuilderPropType) {
  const {register, errors, setValue, getValues}: FormContextValues = form;
  const formData = getValues();

  useEffect(() => {
    console.log('Render called...', getValues());
  });

  const onChange = (args: any) => ({
    value: args[0].nativeEvent.text,
  });

  const inputSelector = (input: FormConfigType) => {
    switch (input.type) {
      case 'outlined-input':
        return (
          // <OutlinedTextField
          //   label={input.label}
          //   error={errors[input.name] && (errors[input.name] || {}).message}
          //   {...input.textInputProps}
          // />
          <TextInput
            label={input.label}
            underlineColor={'red'}
            mode={'outlined'}
            error={errors[input.name] ? true : false}
          />
        );
      case 'basic-input':
        return (
          // <TextField
          //   label={input.label}
          //   error={errors[input.name] && (errors[input.name] || {}).message}
          //   {...input.textInputProps}
          // />
          <TextInput
            label={input.label}
            mode={'flat'}
            error={errors[input.name] ? true : false}
          />
        );
      case 'filled-input':
        return (
          <FilledTextField
            label={input.label}
            error={errors[input.name] && (errors[input.name] || {}).message}
            {...input.textInputProps}
          />
        );
      default:
        return (
          <OutlinedTextField
            label={input.label}
            error={errors[input.name] && (errors[input.name] || {}).message}
            {...input.textInputProps}
          />
        );
    }
  };

  return {
    formConfigArray,
    formGlobalConfig,
    onChange,
    register,
    inputSelector,
    setValue,
    formData,
  };
}

export default AppFormBuilder;
