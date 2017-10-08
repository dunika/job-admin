import React from 'react';
import { lifecycle } from 'recompose';

import AddJobs from './AddJobs';
import PostJobs from './PostJobs';


const CVLibrary = () => (
  <div>
    <h1>CV Library</h1>
    <AddJobs />
    <PostJobs />
  </div>
);

export default CVLibrary
;
