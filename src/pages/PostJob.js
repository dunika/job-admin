import React, { Component } from 'react';

import {
  actions,
  PostJob as PostJobContainer,
} from 'client/indeed';
import { withReduxSaga } from 'client/shared/store';
import { Main } from './layout';

class PostJob extends Component {
  static getInitialProps({ store: { getState, dispatch }, query: { id } }) {
    const { indeed: { data } } = getState();
    const job = data[id];
    dispatch(actions.scrapeJobData(job));
    return { id };
  }

  render() {
    return (
      <Main>
        <PostJobContainer job={this.props.job} />
      </Main>
    );
  }
}

export default withReduxSaga(PostJob, ({ indeed: { data } }, { id }) => ({ job: data[id] }));
