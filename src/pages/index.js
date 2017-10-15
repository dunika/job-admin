import React, { Component } from 'react';
import { actions as jobActions, Jobs } from 'client/jobs';

import { withReduxSaga } from 'client/shared/store';
import { Main } from './layout';

class App extends Component {
  static async getInitialProps({ store: { dispatch } }) {
    dispatch(jobActions.getJobs());
    return {};
  }

  render() {
    return (
      <Main>
        <Jobs />
      </Main>
    );
  }
}

export default withReduxSaga(App);
