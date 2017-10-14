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
  height: 20px;
  flex-shrink: 0;
  width: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
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
      <div>{job.urls.posted}</div>
      <div>{moment(job.date).format('dddd, MMMM, Do')}</div>
    </div>
  </Result>
);

const Jobs = ({
  activeFilters,
  dismissJobs,
  jobs,
  selectedJobs,
  togglFilter,
  toggleJob,
}) => (
  <div>
    <Header>
      <button onClick={dismissJobs}>
        Dismiss Selected Jobs
      </button>
      <div>
        <Checkbox
          type="checkbox"
          checked={activeFilters.includes('posted')}
          onChange={() => togglFilter('posted')}
        />
          Posted To Wordpress
      </div>

    </Header>
    {jobs && jobs.map(job => <Job key={`${job._id}`} isSelected={selectedJobs[job._id]} toggle={toggleJob} job={job} />)}
  </div>
);

export default connectReselect({
  activeFilters: selectors.activeFilters,
  jobs: selectors.filteredJobs,
  selectedJobs: selectors.selectedJobs,
}, {
  dismissJobs: actions.toggleJob,
  toggleJob: actions.toggleJob,
  togglFilter: actions.toggleFilter,
})(Jobs);
