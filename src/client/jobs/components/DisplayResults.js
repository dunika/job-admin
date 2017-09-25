import React from 'react';
import { branch, renderNothing } from 'recompose';

const DisplayResults = ({ data }) => (
  <div>
    <p>Results</p>
    {Object.entries(data).map(([key, value], index, { length }) => (
      <span key={key}>
        {`${key} : ${value} ${index + 1 !== length ? '|' : ''} `}
      </span>
    ))}
  </div>
);

export default branch(({ data }) => !data, renderNothing)(DisplayResults);

