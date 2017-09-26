import React from 'react';

import { withAsyncDataHandler } from 'client/shared/hoc';
import { request } from 'isomorphic';
import DisplayResults from './DisplayResults';

const PostJobs = ({ postJobs, isLoading, data }) => (
  <div>
    <button disabled={isLoading} onClick={postJobs}>
      {isLoading ? 'Post jobs...' : 'Post Jobs to Wordpress'}
    </button>
    <DisplayResults data={data} />
  </div>
);


export default withAsyncDataHandler('postJobs', () => request('/api/cv-library/create-posts'))(PostJobs);

