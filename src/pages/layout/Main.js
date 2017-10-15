import React from 'react';
import styled from 'styled-components';

import { Link } from 'client/shared/components';

const Container = styled.div``;

const Header = styled.div`
  background-color: #003399;
  padding: 10px 15px;
`;

const HeaderLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  margin-right: 20px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Main = ({ children }) => (
  <Container>
    <Header>
      <HeaderLink to="/" shallow>
        Jobs
      </HeaderLink>
      <HeaderLink to="/cv-library" shallow>
        CV Library
      </HeaderLink>
    </Header>
    {children}
  </Container>
);

export default Main;
