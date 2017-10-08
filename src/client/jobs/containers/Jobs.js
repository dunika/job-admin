import React from 'react';

import { connectReselect } from 'client/shared/store/utils';
import { actions, selectors } from '../store';

const Job = ({ toggle, isSelected, job }) => (
  <div>
    <input
      type="checkbox"
      checked={isSelected}
      onChange={() => toggle(job._id)}
    />
    <div>{job.title}</div>
  </div>
);

const Jobs = ({ toggle, selected, jobs }) => (
  <div>
    {jobs.map(job => <Job key={job.id} isSelected={selected.includes(job._id)} toggle={toggle} job={job} />)}
  </div>
);

export default connectReselect({
  jobs: selectors.jobs,
  selected: selectors.selected,
}, {
  toggle: actions.toggleJob,
})(Jobs);
