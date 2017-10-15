import React from 'react';
import styled from 'styled-components';

import { Flex } from 'client/shared/components';
import { connectReselect } from 'client/shared/utils';
import { actions, selectors } from '../../store';
import { Job } from '../../components';
import Filters from './Filters';

const Container = styled.div`
  ${({ isLoading }) => isLoading && `
    opacity: 0.5;
    pointer-events: none; 
    overflow: hidden;
  `}
`;

const Results = styled.div`
  padding-right: 20px;
`;

const ActionBar = styled.div`
  background-color: #003399;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  padding: 10px 0;
  button {
    margin-left: 15px;
  }
`;

const Jobs = ({
  isLoading,
  addJobsToWordpress,
  dismissJobs,
  jobs,
  selectedJobIds,
  toggleJob,
}) => (
  <Container isLoading={isLoading}>
    <Flex justify="space-between">
      <Results>
        {jobs.map(job => <Job key={`${job._id}`} isSelected={selectedJobIds[job._id]} toggle={toggleJob} job={job} />)}
      </Results>
      <Filters />
    </Flex>
    <ActionBar>
      <Flex>
        <button onClick={dismissJobs}>
          Dismiss Jobs
        </button>
        <button onClick={addJobsToWordpress}>
          Add Jobs to Wordpress
        </button>
      </Flex>
    </ActionBar>
  </Container>
);

export default connectReselect({
  jobs: selectors.filteredJobs,
  isLoading: selectors.isLoading,
  selectedJobIds: selectors.selectedJobIds,
}, {
  dismissJobs: actions.dismissJobs,
  addJobsToWordpress: actions.addJobsToWordpress,
  toggleJob: actions.toggleJob,
})(Jobs);
