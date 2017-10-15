import React, { Component } from 'react';

import {
  actions as jobActions,
  selectors as jobSelectors,
  Job as JobComponent,
} from 'client/jobs';
import { withReduxSaga } from 'client/shared/store';
import { Main } from './layout';

class Job extends Component {
  static async getInitialProps({ store: { dispatch, getState }, query: { id } }) {
    let { jobs: { data } } = getState();
    if (!data) {
      const lad = dispatch(jobActions.getJobs());
      dispatch(jobActions.getJobs());
      data = getState().jobs.data;
    }
    return { id };
  }

  render() {
    return (
      <Main>
        <JobComponent job={this.props.job} showFullDescription />
      </Main>
    );
  }
}

export default withReduxSaga(Job, ({ jobs: { data } }, { id }) => ({ job: data[id] }));
