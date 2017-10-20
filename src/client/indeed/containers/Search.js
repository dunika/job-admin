import React from 'react';
import styled from 'styled-components';
import { compose, withStateHandlers, withHandlers } from 'recompose';

import { Flex } from 'client/shared/components';
import { connectReselect } from 'client/shared/utils';
import { Job } from 'client/jobs';
import { actions, selectors } from '../store';

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

const Jobs = ({
  keywordRef,
  locationRef,
  countryRef,
  handleSearch,
  isLoading,
  jobs,
}) => (
  <Container isLoading={isLoading}>
    <Flex>
      <input placeholder="Keywords" ref={keywordRef} />
      <input placeholder="Location" ref={locationRef} />
      <input placeholder="Country code" ref={countryRef} />
      <button onClick={handleSearch}>Search</button>
    </Flex>
    <br />
    <Flex justify="space-between">
      <Results>
        {jobs.map(job => (
          <Job
            showFullDescription
            shouldOpenPostJob
            key={`${job._id}`}
            job={job}
          />),
        )}
      </Results>
    </Flex>
  </Container>
);

const enhance = compose(
  withStateHandlers({
    keywordInput: null,
    locationInput: null,
    countryInput: null,
  }, {
    keywordRef: () => keywordInput => ({ keywordInput }),
    locationRef: () => locationInput => ({ locationInput }),
    countryRef: () => countryInput => ({ countryInput }),
  }),
  connectReselect({
    jobs: selectors.jobs,
    isLoading: selectors.isLoading,
  }, {
    search: actions.search,
  }),
  withHandlers({
    handleSearch: ({ search, keywordInput, locationInput, countryInput }) => () => {
      search({
        keywords: keywordInput.value,
        location: locationInput.value,
        country: countryInput.value,
      });
    },
  }),
);

export default enhance(Jobs);
