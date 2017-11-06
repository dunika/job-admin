import React from 'react';

import { CvLibrary as CvLibraryContainer } from 'client/modules/jobs';
import { withReduxSaga } from 'client/store';
import { Main } from './layout';

const CvLibrary = () => (
  <Main>
    <CvLibraryContainer />
  </Main>
);

export default withReduxSaga(CvLibrary);
