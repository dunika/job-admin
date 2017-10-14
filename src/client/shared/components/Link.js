import React from 'react';
import { Link as NextLink } from 'routes';

const Link = ({ children, ...props }) => (
  <NextLink {...props}>
    <a>
      {children}
    </a>
  </NextLink>
);

export default Link;
