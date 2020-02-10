import React, {useEffect, Fragment} from 'react';
import {View} from 'react-native';
import {ValidationOptions} from 'react-hook-form-input/dist/types';
import {FormContextValues} from 'react-hook-form/dist/contextTypes';
import {Controller} from 'react-hook-form';
import {HelperText, TextInput} from 'react-native-paper';
import {TextInputProps} from 'react-native-paper/lib/typescript/src/components/TextInput/TextInput';
import AppFormBuilderInput from './AppFormBuilderInput';

type FormConfigType = {
  name: string;
  type: 'flat' | 'outlined';
  handleSubmit: any;
  label?: string;
  rules?: ValidationOptions | any;
  textInputProps?: TextInputProps | any;
};

export type FormConfigArrayType = Array<FormConfigType>;

export type FormGlobalConfigType = {
  mode: 'onChange' | 'onBlur' | 'onSubmit';
};

type AppFormBuilderPropType = {
  formConfigArray: FormConfigArrayType;
  form: FormContextValues | any;
};

function AppFormBuilder(props: AppFormBuilderPropType) {
  const {formConfigArray, inputSelector, onChange, form} = useAppFormBuilder(
    props,
  );

  const renderAppBuilderItem = (input: any, index: number) => (
    <View key={index} style={{marginBottom: 15}}>
      <Controller
        as={inputSelector(input)}
        name={input.name}
        rules={input.rules}
        control={form.control}
        onChange={onChange}
      />
    </View>
  );

  return <Fragment>{formConfigArray.map(renderAppBuilderItem)}</Fragment>;
}

function useAppFormBuilder({formConfigArray, form}: AppFormBuilderPropType) {
  useEffect(() => {
    console.log('Render called...', form.errors);
  });

  const onChange = (args: any) => ({
    value: args[0].nativeEvent.text,
  });

  const inputSelector = (input: FormConfigType) => {
    const propsInput = {
      mode: input.type,
      label: input.label,
      error: form.errors[input.name] && (form.errors[input.name] || {}).message,
      form: form,
      input: input,
      ...input.textInputProps,
    };
    return <AppFormBuilderInput {...propsInput} />;
  };

  return {
    formConfigArray,
    form,
    onChange,
    inputSelector,
  };
}

export default AppFormBuilder;
