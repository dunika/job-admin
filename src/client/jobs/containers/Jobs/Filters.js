import React from 'react';
import styled from 'styled-components';

import { connectReselect } from 'client/shared/utils';
import { Checkbox, Flex } from 'client/shared/components';
import { actions, selectors } from '../../store';

const Container = styled.div`
  padding: 30px 20px;
  position: fixed;
  right: 0;
  top: 50px;
`;

const Filters = ({
  postedFilter,
  locationFilter,
  togglePostedFilter,
  setLocationFilter,
}) => (
  <Container>
    <p>Filters</p>
    <Flex align="center">
      <Checkbox
        label="Posted to Wordpress"
        size="small"
        checked={postedFilter}
        onChange={togglePostedFilter}
      />
    </Flex>
    <input
      placeholder="Search location..."
      onChange={({ target: { value } }) => setLocationFilter(value)}
    />
  </Container>
);

export default connectReselect({
  postedFilter: selectors.postedFilter,
  locationFilter: selectors.locationFilter,
}, {
  togglePostedFilter: actions.togglePostedFilter,
  setLocationFilter: actions.setLocationFilter,
})(Filters);
