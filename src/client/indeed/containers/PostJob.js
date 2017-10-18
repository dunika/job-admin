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

const PostJob = ({
  descriptionRef,
  salaryRef,
  addJob, // renamce add job to post job
  isLoading,
  job,
}) => (
  <Container isLoading={isLoading}>
    <Flex justify="space-between">
      <Results>
        <Job showFullDescription job={job} />
      </Results>
    </Flex>
    <br />
    <Flex col>
      <input placeholder="Salary" ref={salaryRef} />
      <br />
      <textarea rows="10" placeholder="Description" ref={descriptionRef} />
      <br />
      <button onClick={addJob}>Post Job</button>
    </Flex>
  </Container>
);

const enhance = compose(
  withStateHandlers({
    descriptionInput: null,
    salaryInput: null,
    countryInput: null,
  }, {
    descriptionRef: () => descriptionInput => ({ descriptionInput }),
    salaryRef: () => salaryInput => ({ salaryInput }),
  }),
  connectReselect({
    isLoading: selectors.isLoading,
  }, {
    addJobToWordpress: actions.addJobToWordpress,
  }),
  withHandlers({
    addJob: ({ addJobToWordpress, job, descriptionInput, salaryInput }) => () => {
      addJobToWordpress({
        ...job,
        urls: {
          source: job.urls.nonSponsoredSource,
        },
        description: descriptionInput.value,
        salary: salaryInput.value,
      });
    },
  }),
);

export default enhance(PostJob);
