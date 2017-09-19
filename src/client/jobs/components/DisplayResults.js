import React from 'react';
import { branch, renderNothing } from 'recompose';

const DisplayResults = ({ data }) => (
  <div>
    <p>Results</p>
    {Object.entries(data).map(([key, value]) => (
      <span>
        {`${key} : ${value}`}
      </span>
    ))}
  </div>
);

export default branch(({ data }) => !data, renderNothing)(DisplayResults);

