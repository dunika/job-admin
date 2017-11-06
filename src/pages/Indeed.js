import React from 'react';

import { Search } from 'client/modules/indeed';
import { withReduxSaga } from 'client/store';
import { Main } from './layout';

const Indeed = () => (
  <Main>
    <Search />
  </Main>
);

export default withReduxSaga(Indeed);
