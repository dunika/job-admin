import { createAsyncAction } from 'client/shared/utils';
import { parse } from 'query-string';

const normalizeJobs = data => data.reduce((results, { snippet, jobtitle, formattedLocation, ...rest }) => ({
  ...results,
  [rest.jobkey]: {
    _id: rest.jobkey,
    title: jobtitle,
    description: snippet,
    location: formattedLocation,
    urls: {
      source: `https://ie.indeed.com/rc/clk?jk=${rest.jobkey}`,
    },
    ...rest,
  },
}), {});

export default {
  search: createAsyncAction('SEARCH_INDEED', normalizeJobs),
  addJobToWordpress: createAsyncAction('ADD_JOB_TO_WORDPRESS', normalizeJobs),
};
