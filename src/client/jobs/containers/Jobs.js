import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { connectReselect } from 'client/shared/utils';
import { actions, selectors } from '../store';

const Result = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 500px;
`;

const Checkbox = styled.input`
  height: 60px;
  width: 60px;
`;

const Job = ({ toggle, isSelected, job }) => (
  <Result>
    <Checkbox
      type="checkbox"
      checked={isSelected}
      onChange={() => toggle(job._id)}
    />
    <div>
      <div>{job.title}</div>
      <div dangerouslySetInnerHTML={{ __html: `${job.description.substr(0, 200)}...` }} />
      <div>{moment(job.date).format('dddd, MMMM, Do')}</div>
    </div>
  </Result>
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
