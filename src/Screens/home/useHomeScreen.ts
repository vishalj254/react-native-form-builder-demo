import {useForm} from 'react-hook-form';
import {
  FormConfigArrayType,
  FormGlobalConfigType,
} from '../../Components/Shared/AppFormBuilder';
import {useState} from 'react';

function useHomeScreen() {
  const [resetFormKey, updateResetFormKey] = useState(1);
  const form = useForm({
    defaultValues: {
      email: 'bluebill1049@hotmail.com',
    },
  });

  return {
    form,
    formConfigArray,
    formGlobalConfig,
    resetFormKey,
    updateResetFormKey,
  };
}

const formConfigArray: FormConfigArrayType = [
  {
    name: 'name',
    type: 'basic-input',
    label: 'Name',
    rules: {
      required: {
        value: true,
        message: 'Name is required',
      },
    },
    textInputProps: {
      keyboardType: 'default',
      fontSize: 18,
      labelFontSize: 14,
      tintColor: 'blue',
    },
  },
  {
    name: 'email',
    type: 'outlined-input',
    label: 'Email Address',
    rules: {
      required: {
        value: true,
        message: 'Email is required',
      },
      pattern: {
        value: /[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,
        message: 'Email is invalid',
      },
    },
    textInputProps: {
      keyboardType: 'email-address',
      autoCapitalize: 'none',
      fontSize: 18,
      labelFontSize: 14,
      tintColor: 'orange',
    },
  },
  {
    name: 'password',
    type: 'filled-input',
    label: 'Password',
    rules: {
      required: {
        value: true,
        message: 'Password is required',
      },
      minLength: {
        value: 8,
        message: 'Password should be atleast 8 characters',
      },
      maxLength: {
        value: 30,
        message: 'Password should be between 8 and 30 characters',
      },
    },
    textInputProps: {
      keyboardType: 'default',
      secureTextEntry: true,
      fontSize: 18,
      labelFontSize: 14,
      inputContainerStyle: {backgroundColor: '#f6f6f6'},
    },
  },
];
const formGlobalConfig: FormGlobalConfigType = {
  mode: 'onChange',
};

export default useHomeScreen;
