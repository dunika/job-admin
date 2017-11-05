import React from 'react';
import styled from 'styled-components';
import { compose, withHandlers, withProps } from 'recompose';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';

import { Flex } from 'client/shared/components';
import { connectReselect } from 'client/shared/utils';
import { Job } from 'client/jobs';
import { CategorySelector, JobTypeSelector } from '../components';
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
    {!job.urls.posted && <form onSubmit={handleSubmit}>
      <Flex col>
        <label>Title</label>
        <Field
          name="title"
          component="input"
          placeholder="Job Title"
        />
        <label>Expiry Date</label>
        <Field
          name="expiryDate"
          component="input"
          type="date"
        />
        <label>Category</label>
        <Field
          name="category"
          component={CategorySelector}
        />
        <label>Job Type</label>
        <Field
          name="type"
          component={JobTypeSelector}
        />
        <label>Company</label>
        <Field
          name="company"
          component="input"
          placeholder="Company Name"
        />
        <label>Salary</label>
        <Field
          name="salary"
          component="input"
          placeholder="Salary"
        />
        <label>Location</label>
        <Field
          name="location"
          component="input"
          placeholder="Location"
        />
        <label>Description (Leave blank to use scraped description)</label>
        <Field
          name="description"
          component="textarea"
          rows="10"
          placeholder="Description"
        />
        <button type="submit">Post Job</button>
      </Flex>
    </form>}
  </Container>
);

const enhance = compose(
  connectReselect({
    isLoading: selectors.isLoading,
  }, {
    postJobToWordpress: actions.postJobToWordpress,
  }),
  withHandlers({
    onSubmit: ({
      postJobToWordpress,
      job: {
        source,
        description,
        sourceId,
        urls,
      },
    }) => (data) => {
      postJobToWordpress({
        source,
        description: data.description || description,
        sourceId,
        urls,
        expiryDate: moment(data.expiryDate).format('YYYY-MM-DD'),
        ...data,
      });
    },
  }),
  withProps(({ job: { company, location, salary, title } }) => ({
    initialValues: {
      expiryDate: moment().add(1, 'M').format('YYYY-MM-DD'),
      title,
      salary,
      location,
      company,
    },
  })),
  reduxForm({
    form: 'post-job',
  }),
);

export default enhance(PostJob);
