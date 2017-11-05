import { createAsyncAction } from 'client/shared/utils';
import { regions } from 'isomorphic';

const getLocation = (location) => {
  const regex = new RegExp(location.replace(',', '').split(' ').join('|'));
  return regions.find(region => regex.test(region)) || location;
};

// TODO: Move the main normalization to server
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
