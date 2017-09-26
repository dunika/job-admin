import React from 'react';

import { withAsyncDataHandler } from 'client/shared/hoc';
import { request } from 'isomorphic';
import DisplayResults from './DisplayResults';

const AddJobs = ({ getJobs, isLoading, data }) => (
  <div>
    <button disabled={isLoading} onClick={getJobs}>
      {isLoading ? 'Adding jobs...' : 'Add Jobs to Database'}
    </button>
    <DisplayResults data={data} />
  </div>
);

export default withAsyncDataHandler('getJobs', () => request('/api/cv-library/get-jobs'))(AddJobs);

