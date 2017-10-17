import React from 'react';

import { Search } from 'client/indeed';
import { withReduxSaga } from 'client/shared/store';
import { Main } from './layout';

const Indeed = () => (
  <Main>
    <Search />
  </Main>
);

export default withReduxSaga(Indeed);
