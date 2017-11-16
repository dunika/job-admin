import React from 'react';

import { HtmlId } from 'client/modules/shared/fas';

const formInput = Component => ({ label, ...otherProps }) => (
  <HtmlId>
    {id => (
      <label htmlFor={id}>
        {label && <span>
          {label}
        </span>}
        <Component {...otherProps} id={id} />
      </label>
    )}
  </HtmlId>
);

export default formInput;
