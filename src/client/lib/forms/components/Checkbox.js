import React from 'react';
import styled from 'styled-components';

import { Flex } from 'client/modules/shared/components';

const sizes = {
  small: {
    label: 'font-size: 12px;',
    checkbox: 'height: 15px;width: 15px;margin: 5px 5px 5px 0;',
  },
  regular: {
    label: 'font-size: 16px;',
    checkbox: 'height: 20px;width: 20px;margin: 10px;',
  },
};

const CheckboxStyled = styled.input.attrs({
  type: 'checkbox',
}) `
  ${({ size }) => sizes[size].checkbox}
  flex-shrink: 0;
`;

const Label = styled.label`
  white-space: nowrap;
  ${({ size }) => sizes[size].label}
  margin: 0;
`;


const Checkbox = ({ label, size = 'regular', ...otherProps }) => (
  <Flex align="center">
    <CheckboxStyled
      size={size}
      {...otherProps}
    />
    {label && <Label size={size}>
      {label}
    </Label>}
  </Flex>
);

export default Checkbox;
