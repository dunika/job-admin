import React from 'react';
import styled from 'styled-components';

import { connectReselect } from 'client/shared/utils';
import { Checkbox, Flex } from 'client/shared/components';
import { actions, selectors } from '../../store';

const Filters = ({
  postedFilter,
  locationFilter,
  togglePostedFilter,
  setLocationFilter,
}) => (
  <div>
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
  </div>
);

export default connectReselect({
  postedFilter: selectors.postedFilter,
  locationFilter: selectors.locationFilter,
}, {
  togglePostedFilter: actions.togglePostedFilter,
  setLocationFilter: actions.setLocationFilter,
})(Filters);
