import React from 'react';
import styled from 'styled-components';

import { Link } from 'client/modules/shared/components';

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
      <HeaderLink to="/indeed" shallow>
        Indeed
      </HeaderLink>
      <HeaderLink to="/jobs" shallow>
        Jobs
      </HeaderLink>
    </Header>
    <Content>
      {children}
    </Content>
  </Container>
);

export default Main;
