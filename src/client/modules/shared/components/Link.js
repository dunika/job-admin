import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Link = ({ children, className, ...otherProps }) => (
  <A href={otherProps.to} className={className}>
    {children}
  </A>
);

export default Link;
