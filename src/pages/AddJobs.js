import React, { Component } from 'react';
import { actions as jobActions, Jobs, CVLibrary } from 'client/jobs';

import { withReduxSaga } from 'client/shared/store';

class App extends Component {
  static async getInitialProps({ store: { dispatch } }) {
    dispatch(jobActions.getJobs.request());
    return { dispatch };
  }

  render() {
    return (<div>
      <button onClick={() => this.props.dispatch(jobActions.getJobs.request())}>
      lad
      </button>
      <CVLibrary />
      <Jobs />
    </div>);
  }
}

export default withReduxSaga(App);
