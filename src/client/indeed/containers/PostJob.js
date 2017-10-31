import React from 'react';
import styled from 'styled-components';
import { compose, withHandlers } from 'recompose';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';

import { Flex } from 'client/shared/components';
import { connectReselect } from 'client/shared/utils';
import { Job } from 'client/jobs';
import { CategorySelector } from '../components';
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

const jobTypes = [
  'Apprenticeship',
  'Freelance',
  'Full Time',
  'Internship',
  'Part Time',
  'Part Time and Full Time',
  'Permanent',
  'Temporary',
  'Volunteer',
];

const PostJob = ({
  handleSubmit,
  postJob,
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
    <form onSubmit={handleSubmit}>
      <Flex col>
        <Field
          name="category"
          component={CategorySelector}
        />
        <br />
        <Field
          name="expiraryDate"
          component="input"
          type="date"
        />
        <br />
        <Field
          component="select"
          name="jobType"
        >
          <option disabled value="">
            Select job type
          </option>
          {jobTypes.map(type => (
            <option value={type}>
              {type}
            </option>
          ))}
        </Field>
        <br />
        <Field
          name="company"
          component="input"
          placeholder="Company Name"
        />
        <br />
        <Field
          name="title"
          component="input"
          placeholder="Job Title"
        />
        <br />
        <Field
          name="description"
          component="textarea"
          rows="10"
          placeholder="Description"
        />
        <br />
        <button type="submit">Post Job</button>
      </Flex>
    </form>
  </Container>
);

const enhance = compose(
  connectReselect({
    isLoading: selectors.isLoading,
    initialValues: () => ({
      expiraryDate: moment().format('YYYY-MM-DD'),
    }),
  }, {
    postJobToWordpress: actions.postJobToWordpress,
  }),
  withHandlers({
    addJob: ({ postJobToWordpress, job }) => (data) => {
      postJobToWordpress({
        ...job,
        urls: {
          source: job.urls.nonSponsoredSource,
        },
        ...data,
      });
    },
  }),
  reduxForm({
    form: 'post-job',
  }),
);

export default enhance(PostJob);
