import request from 'request-promise';

import { createPost } from 'config';

const postJob = async (job) => {
  const {
    urls: { source },
    location,
    salary,
    date,
    ...otherJobProperties
  } = job;
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
      console.log(`Succesfully posted to ${response.url}`);
      return response.url;
    }
    throw new Error(`Failed to post - ${response}`);
  } catch (error) {
    throw error;
  }
};

export default postJob;
