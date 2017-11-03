import React from 'react';
import styled from 'styled-components';
import { compose, withHandlers, withProps } from 'recompose';
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
        <p>Expiry Date</p>
        <Field
          name="expiryDate"
          component="input"
          type="date"
        />
        <br />
        <p>Location</p>
        <Field
          name="location"
          component="input"
          placeholder="Location"
        />
        <br />
        <p>Company</p>
        <Field
          name="company"
          component="input"
          placeholder="Company Name"
        />
        <br />
        <p>Title</p>
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
  }, {
    postJobToWordpress: actions.postJobToWordpress,
  }),
  withHandlers({
    onSubmit: ({ postJobToWordpress, job }) => (data) => {
      postJobToWordpress({
        ...job,
        urls: {
          source: job.urls.nonSponsoredSource,
        },
        expiryDate: moment(data.expiryDate).format('YYYY-MM-DD'),
        ...data,
      });
    },
  }),
  withProps(({ job: { company, location, title } }) => ({
    initialValues: {
      expiryDate: moment().add(1, 'M').format('YYYY-MM-DD'),
      title,
      location,
      company,
    },
  })),
  reduxForm({
    form: 'post-job',
  }),
);

export default enhance(PostJob);
