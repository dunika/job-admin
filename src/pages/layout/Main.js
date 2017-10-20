import React from 'react';
import styled from 'styled-components';

import { Link } from 'client/shared/components';

const Container = styled.div``;

const Content = styled.div`
  padding: 40px 15px;
`;

const Header = styled.div`
  background-color: #003399;
  padding: 10px 15px;
`;

const HeaderLink = styled(Link)`
  color: #FFFFFF;
  margin-right: 20px;
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
      <HeaderLink to="/indeed" shallow>
        Indeed
      </HeaderLink>
    </Header>
    <Content>
      {children}
    </Content>
  </Container>
);

export default Main;
