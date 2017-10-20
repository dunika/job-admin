import { createAsyncAction } from 'client/shared/utils';
import { regions } from 'isomorphic';

const getLocation = (location) => {
  const regex = new RegExp(location.replace(',', '').split(' ').join('|'));
  return regions.find(region => regex.test(region));
};

// TODO: Move the main normalization to server
// TODO: Rename location to region
const normalizeJobs = data => data.reduce((results, { snippet, jobtitle, formattedLocationFull, ...rest }) => ({
  ...results,
  [rest.jobkey]: {
    _id: rest.jobkey,
    source: 'indeed',
    sourceId: rest.jobkey,
    title: jobtitle,
    description: snippet,
    fullAddress: formattedLocationFull,
    location: getLocation(formattedLocationFull),
    urls: {
      nonSponsoredSource: `https://ie.indeed.com/rc/clk?jk=${rest.jobkey}`,
      source: rest.url,
    },
    ...rest,
  },
}), {});

export default {
  search: createAsyncAction('SEARCH_INDEED', normalizeJobs),
  addJobToWordpress: createAsyncAction('ADD_JOB_TO_WORDPRESS'),
};
