import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ col }) => (col ? 'column' : 'row')};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ justify }) => justify && `justify-content: ${justify}`};
`;

export default Flex;
