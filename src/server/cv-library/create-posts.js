import BlueBird from 'bluebird';

import config from 'config';
import { models } from 'database';
import request from 'shared/request';

export default async (req, res) => {
  const jobs = await models.Job.find(
    {
      postedUrl: null,
      source: 'cv-library',
    },
    'description urls.original location salary title',
  ).sort({ salary: -1, date: -1 });

  if (jobs.length) {
    await BlueBird.map(jobs, async (job) => {
      const {
        description,
        urls: { original },
        location,
        salary,
        title,
      } = job._doc; // eslint-disable-line
      try {
        const response = await request(config.createPost.url, {
          formData: {
            actions: config.createPost.action,
            description,
            location,
            locationId: location,
            salary,
            title,
            url: original,
          },
        });
        if (response.url) {
          console.log(`Succesfully posted to ${response.url}`);
          job.postedUrl = response.url;
          await job.save();
          console.log('Job updated');
        } else {
          console.log(`Failed to post - ${response}`);
        }
      } catch (error) {
        console.log(error);
      }
    }, { concurrency: 1 });
    console.log('Finished creating job posts');
  } else {
    console.log('No jobs to post!');
    return [];
  }
};

