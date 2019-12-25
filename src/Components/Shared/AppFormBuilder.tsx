import React, {useEffect, Fragment} from 'react';
import {View} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
  TextFieldProps,
} from 'react-native-material-textfield';
import {ValidationOptions} from 'react-hook-form-input/dist/types';
import {FormContextValues} from 'react-hook-form/dist/contextTypes';
import {Controller} from 'react-hook-form';
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
    control,
  } = useAppFormBuilder(props);

  const renderAppBuilderItem = (input: FormConfigType | any, index: number) => (
    <View key={index} style={{marginBottom: 15}}>
      <Controller
        as={inputSelector(input)}
        name={input.name}
        rules={input.rules}
        mode={formGlobalConfig.mode}
        control={control}
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
  const {
    register,
    errors,
    setValue,
    getValues,
    control,
  }: FormContextValues | any = form;
  const formData = getValues();

  useEffect(() => {
    console.log('Render called...', errors);
  });

  const onChange = (args: any) => ({
    value: args[0].nativeEvent.text,
  });

  const inputSelector = (input: FormConfigType) => {
    console.log(input.name);
    switch (input.type) {
      case 'outlined-input':
        return (
          <TextInput
            label={input.label}
            error={errors[input.name] && (errors[input.name] || {}).message}
            {...input.textInputProps}
          />
        );
      case 'basic-input':
        return (
          <TextInput
            label={input.label}
            error={errors[input.name] && (errors[input.name] || {}).message}
            {...input.textInputProps}
          />
        );
      case 'filled-input':
        return (
          <TextInput
            label={input.label}
            error={errors[input.name] && (errors[input.name] || {}).message}
            {...input.textInputProps}
          />
        );
      default:
        return (
          <TextInput
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
    control,
  };
}

export default AppFormBuilder;
