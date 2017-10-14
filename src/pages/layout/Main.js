import React from 'react';
import styled from 'styled-components';

import { Link } from 'client/shared/components';

const Container = styled.div``;

const Header = styled.div``;

const Main = ({ children }) => (
  <Container>
    <Header>
      <Link to="/" shallow>
      Jobs
      </Link>
      <Link to="/cv-library">
      CVLibrary
      </Link>
    </Header>
    {children}
  </Container>
);

export default Main;
