import React from 'react';
import { Link as NextLink } from 'routes';

const Link = ({ children, className, ...otherProps }) => (
  <NextLink {...otherProps}>
    <a className={className}>
      {children}
    </a>
  </NextLink>
);

export default Link;
