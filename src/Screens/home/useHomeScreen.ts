import {useForm} from 'react-hook-form';
import {FormConfigArrayType} from '../../Components/Shared/AppFormBuilder';

function useHomeScreen() {
  const form = useForm({
    defaultValues: {
      name: 'Test',
      email: 'bluebill1049@hotmail.com',
      password: '12345678',
    },
    mode: 'onChange',
  });
  const onSubmit = form.handleSubmit((data: any) => {
    console.log(data);
  });

  const onReset = () => {
    form.reset({
      name: '',
      email: '',
      password: '',
    });
  };

  return {
    form,
    formConfigArray,
    onSubmit,
    onReset,
  };
}

const formConfigArray: FormConfigArrayType | any = [
  {
    name: 'name',
    type: 'outlined',
    label: 'Name',
    rules: {
      required: {
        value: true,
        message: 'Name is required',
      },
    },
    textInputProps: {
      keyboardType: 'default',
    },
  },
  {
    name: 'email',
    type: 'outlined',
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
    },
  },
  {
    name: 'password',
    type: 'outlined',
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
    },
  },
];

export default useHomeScreen;
