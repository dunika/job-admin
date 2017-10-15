import React from 'react';
import { Link as NextLink } from 'routes';
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;


const Link = ({ children, className, ...otherProps }) => (
  <NextLink {...otherProps}>
    <A href={otherProps.to} className={className}>
      {children}
    </A>
  </NextLink>
);

export default Link;
