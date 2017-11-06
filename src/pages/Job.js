import React, { Component } from 'react';

import {
  actions as jobActions,
  Job as JobComponent,
} from 'client/modules/jobs';
import { withReduxSaga } from 'client/store';
import { Main } from './layout';

class Job extends Component {
  static async getInitialProps({ store: { dispatch, getState }, query: { id } }) {
    let { jobs: { data } } = getState();
    if (!data) {
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
