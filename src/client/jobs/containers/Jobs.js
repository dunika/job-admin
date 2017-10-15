import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { connectReselect } from 'client/shared/utils';
import { actions, selectors } from '../store';

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ col }) => (col ? 'column' : 'row')};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ justify }) => justify && `justify-content: ${justify}`};
`;

const Container = styled.div`
  padding-top: 40px;
`;

const Results = styled.div`
  padding-right: 20px;
`;

const Result = styled.div`
  margin-bottom: 20px;
  width: 500px;
`;

const Checkbox = styled.input`
  height: 20px;
  flex-shrink: 0;
  width: 20px;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Filters = styled.div`
  position: fixed;
  padding-right: 20px;
  right: 0;
  top: 50px;
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

const Job = ({ toggle, isSelected, job }) => (
  <Result>
    <Flex align="center">
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
    </Flex>
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
  <Container>
    <Flex justify="space-between">
      <Results>
        {jobs.map(job => <Job key={`${job._id}`} isSelected={selectedJobs[job._id]} toggle={toggleJob} job={job} />)}
      </Results>
      <Filters>
        <p>Filters</p>
        <div>
          <Checkbox
            type="checkbox"
            checked={activeFilters.includes('posted')}
            onChange={() => togglFilter('posted')}
          />
            Posted To Wordpress
        </div>
      </Filters>
    </Flex>
    <ActionBar>
      <Flex>
        <button onClick={dismissJobs}>
          Dismiss Jobs
        </button>
        <button onClick={dismissJobs}>
          Add Jobs to Wordpress
        </button>
      </Flex>
    </ActionBar>
  </Container>
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
