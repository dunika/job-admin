import React from 'react';

import { CvLibrary as CvLibraryContainer } from 'client/jobs';
import { withReduxSaga } from 'client/shared/store';
import { Main } from './layout';

const CvLibrary = () => (
  <Main>
    <CvLibraryContainer />
  </Main>
);

export default withReduxSaga(CvLibrary);
