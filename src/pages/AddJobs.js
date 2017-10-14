import React, { Component } from 'react';
import { actions as jobActions, Jobs } from 'client/jobs';

import { withReduxSaga } from 'client/shared/store';

class App extends Component {
  static async getInitialProps({ store: { dispatch } }) {
    // dispatch(jobActions.getJobs());
    return { dispatch };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch(jobActions.dismissJobs())}>
        dismiss
        </button>
        <button onClick={() => this.props.dispatch(jobActions.getJobs())}>
          get
        </button>
        <Jobs />
      </div>
    );
  }
}

export default withReduxSaga(App);
