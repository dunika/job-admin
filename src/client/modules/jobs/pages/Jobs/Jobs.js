import React from 'react';
import styled from 'styled-components';

import { Flex } from 'client/modules/shared/components';
import { connectReselect } from 'client/lib/redux-helpers';
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

const Panel = styled.div`
  padding: 30px 20px;
  position: fixed;
  right: 0;
  top: 50px;
`;


const Jobs = ({
  addCvLibraryJobs,
  addJobsToWordpress,
  dismissJobs,
  isLoading,
  jobs,
  selectedJobIds,
  toggleJob,

}) => (
  <Container isLoading={isLoading}>
    <Flex justify="space-between">
      <Results>
        {jobs.map(job => (
          <Job
            action={`cv-library/${job._id}`}
            key={`${job._id}`}
            isSelected={selectedJobIds[job._id]}
            toggle={toggleJob}
            job={job}
          />),
        )}
      </Results>
      <Panel>
        <Filters />
        <br />
        <br />
        <Flex col>
          <button onClick={dismissJobs}>
          Dismiss Jobs
          </button>
          <br />
          <button onClick={addJobsToWordpress}>
          Add Jobs to Wordpress
          </button>
          <br />
          <button onClick={addCvLibraryJobs}>
            Get Jobs From CV Library
          </button>
        </Flex>
      </Panel>
    </Flex>
  </Container>
);

export default connectReselect({
  jobs: selectors.filteredJobs,
  isLoading: selectors.isLoading,
  selectedJobIds: selectors.selectedJobIds,
}, {
  addCvLibraryJobs: actions.addCvLibraryJobs,
  dismissJobs: actions.dismissJobs,
  addJobsToWordpress: actions.addJobsToWordpress,
  toggleJob: actions.toggleJob,
})(Jobs);
