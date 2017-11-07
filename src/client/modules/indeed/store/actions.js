import { createAsyncAction } from 'client/lib/redux-helpers';
import locations from 'isomorphic/locations';

const getLocation = (location) => {
  const regex = new RegExp(location.replace(',', '').split(' ').join('|'));
  return locations.find(region => regex.test(region)) || location;
};

// TODO: Rename location to region
const normalizeJobs = data => data.reduce((results, { location, sourceId, ...rest }) => ({
  ...results,
  [sourceId]: {
    _id: sourceId,
    sourceId,
    fullAddress: location,
    location: getLocation(location),
    ...rest,
  },
}), {});

export default {
  search: createAsyncAction('SEARCH_INDEED', normalizeJobs),
  scrapeJobData: createAsyncAction('SCRAPE_JOB_DATA'),
  postJobToWordpress: createAsyncAction('POST_JOB_TO_WORDPRESS'),
};
