import React from 'react';

import { connectReselect } from 'client/lib/redux-helpers';
import { actions, selectors } from '../store';

const CVLibrary = ({ addJobs, isLoading }) => (
  <div>
    <h1>CV Library</h1>
    <div>
      <button disabled={isLoading} onClick={addJobs}>
        {isLoading ? 'Adding jobs...' : 'Add Jobs to Database'}
      </button>
    </div>
  </div>
);

export default connectReselect({
  isLoading: selectors.isLoading,
}, {
  addJobs: actions.addCvLibraryJobs,
})(CVLibrary);
