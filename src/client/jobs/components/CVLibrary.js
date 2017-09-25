import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import { request } from 'isomorphic';
import DisplayResults from './DisplayResults';

const CVLibrary = ({ getJobs, isLoading, data }) => (
  <div>
    <button disabled={isLoading} onClick={getJobs}>
      {isLoading ? 'Getting jobs...' : 'Get Jobs'}
    </button>
    <DisplayResults data={data} />
  </div>
);


const enhance = compose(
  withState('isLoading', 'setIsLoading', false),
  withState('data', 'setData', null),
  withHandlers({
    getJobs: ({ setIsLoading, setData }) => async () => {
      try {
        setIsLoading(true);
        const data = await request('/api/cv-library/get-jobs');
        setData(data);
      } catch (error) {
        setData({ error: error.message });
      } finally {
        setIsLoading(false);
      }
    },
  }),
);


export default enhance(CVLibrary);
