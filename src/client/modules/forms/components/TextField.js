import React from 'react';
import styled from 'styled-components';
import { compose, mapProps } from 'recompose';

import { formInput } from '../hoc';

const Input = styled.input``;

const TextArea = styled.textarea``;

const TextField = ({ Component, id, ...rest }) => (
  <Component
    {...rest}
    id={id}
    type="text"
  />
);

const enhance = compose(
  mapProps(({ type, textarea, ...rest }) => ({
    Component: textarea ? TextArea : Input,
    type: type || 'text',
    ...rest,
  })),
  formInput,
);

export default enhance(TextField);
