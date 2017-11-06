import React from 'react';

import { connectReselect } from 'client/lib/redux-helpers';
import { Checkbox, Flex } from 'client/modules/shared/components';
import { actions, selectors } from '../../store';

const Filters = ({
  postedFilter,
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
