import BlueBird from 'bluebird';
import request from 'request-promise';

import { createPost } from 'config';

const postJobs = async (jobs) => {
  const postedJobs = await BlueBird.map(Array.isArray(jobs) ? jobs : [jobs], async (job) => {
    const {
      urls: { source },
      location,
      salary,
      ...otherJobProperties
    } = job._doc;
    try {
      // TODO: USe our own request module for sending form data once its fixed
      const response = await request.post({
        url: createPost.url,
        json: true,
        formData: {
          action: createPost.action,
          location,
          locationId: location,
          url: source,
          ...salary && { salary },
          ...otherJobProperties,
        },
      });
      if (response.url) {
        return { url: response.url };
        console.log(`Succesfully posted to ${response.url}`);
        job.urls.posted = response.url;
        const addedJob = await job.save();
        return addedJob;
      }
      console.error(`Failed to post - ${response}`);
      return { error: response };
    } catch (error) {
      console.error(error);
      return { error };
    }
  }, { concurrency: 1 });
  return postedJobs;
};

export default postJobs;
