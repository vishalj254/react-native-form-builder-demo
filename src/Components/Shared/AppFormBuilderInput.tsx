import React, {Fragment} from 'react';
import {TextInput, HelperText, DefaultTheme} from 'react-native-paper';

function AppFormBuilderInput(props: any) {
  const {input, form} = props;
  switch (props.mode) {
    case 'outlined':
      return (
        <Fragment>
          <TextInput {...props} />
          {form.errors[input.name] && (
            <HelperText style={{color: DefaultTheme.colors.error}}>
              {(form.errors[input.name] || {}).message}
            </HelperText>
          )}
        </Fragment>
      );
    case 'flat':
      return (
        <Fragment>
          <TextInput {...props} />
          {form.errors[input.name] && (
            <HelperText style={{color: DefaultTheme.colors.error}}>
              {(form.errors[input.name] || {}).message}
            </HelperText>
          )}
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <TextInput {...props} />
          {form.errors[input.name] && (
            <HelperText style={{color: DefaultTheme.colors.error}}>
              {(form.errors[input.name] || {}).message}
            </HelperText>
          )}
        </Fragment>
      );
  }
}

export default AppFormBuilderInput;
