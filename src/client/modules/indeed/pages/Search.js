import React from 'react';
import styled from 'styled-components';
import { compose, withStateHandlers, withHandlers } from 'recompose';

import { Checkbox, Flex } from 'client/modules/shared/components';
import { connectReselect } from 'client/lib/redux-helpers';
import { Job } from 'client/modules/jobs';
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

const Search = styled.div`
  input {
    margin: 0;
  }
  input[type="checkbox"] {
    margin-right: 5px;
  }
  > div > * {
    margin-right: 10px;
  }
`;

const Jobs = ({
  keywordRef,
  locationRef,
  countryRef,
  sortByDateRef,
  handleSearch,
  handleEnterKeyPress,
  isLoading,
  jobs,
}) => (
  <Container isLoading={isLoading}>
    <Search>
      <Flex>
        <input onKeyPress={handleEnterKeyPress} type="text" placeholder="Keywords" ref={keywordRef} />
        <input onKeyPress={handleEnterKeyPress} type="text" placeholder="Location" ref={locationRef} />
        <input onKeyPress={handleEnterKeyPress} type="text" placeholder="Country code" ref={countryRef} />
        <Checkbox label="Sort by date" innerRef={sortByDateRef} />
        <button onClick={handleSearch}>Search</button>
      </Flex>
    </Search>
    <br />
    <Flex justify="space-between">
      <Results>
        {jobs.map(job => (
          <Job
            action={`/indeed/${job._id}`}
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
    sortByDateCheckbox: null,
    keywordInput: null,
    locationInput: null,
    countryInput: null,
  }, {
    sortByDateRef: () => sortByDateCheckbox => ({ sortByDateCheckbox }),
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
    handleSearch: ({ search, sortByDateCheckbox, keywordInput, locationInput, countryInput }) => () => {
      search({
        sortByDate: sortByDateCheckbox.checked,
        keywords: keywordInput.value,
        location: locationInput.value,
        country: countryInput.value,
      });
    },
  }),
  withHandlers({
    handleEnterKeyPress: ({ handleSearch }) => (event) => {
      if (event.which === 13) {
        handleSearch();
      }
    },
  }),
);

export default enhance(Jobs);
