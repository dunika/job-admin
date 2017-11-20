import React from 'react';

import { connectReselect } from 'client/lib/redux-helpers';
import { Flex } from 'client/modules/shared/components';
import { Checkbox } from 'client/lib/forms';
import { actions, selectors } from '../../store';

const Filters = ({
  postedFilter,
  toggleIsPostedFilter,
  setLocationFilter,
}) => (
  <div>
    <p>Filters</p>
    <Flex align="center">
      <Checkbox
        label="Posted to Wordpress"
        size="small"
        checked={postedFilter}
        onChange={toggleIsPostedFilter}
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
  toggleIsPostedFilter: actions.toggleIsPostedFilter,
  setLocationFilter: actions.setLocationFilter,
})(Filters);
