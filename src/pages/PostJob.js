import React, { Component } from 'react';

import {
  PostJob as PostJobContainer,
} from 'client/indeed';
import { withReduxSaga } from 'client/shared/store';
import { Main } from './layout';

class PostJob extends Component {
  static getInitialProps({ query: { id } }) {
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
