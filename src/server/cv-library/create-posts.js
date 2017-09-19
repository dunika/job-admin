import BlueBird from 'bluebird';

import config from 'config';
import { models } from 'database';
import { request } from 'isomorphic';

export default async (req, res) => {
  const jobs = await models.Job.find(
    {
      postedUrl: null,
      source: 'cv-library',
    },
    'description urls.original location salary title',
  ).sort({ salary: -1, date: -1 });

  const results = await BlueBird.map(jobs, async (job) => {
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
        job.urls.posted = response.url;
        await job.save();
        return { success: true };
      }
      console.error(`Failed to post - ${response}`);
      return { error: response };
    } catch (error) {
      console.error(error);
      return { error };
    }
  }, { concurrency: 1 });

  console.log('Finished creating job posts');
  res.json(200).json({
    amountToAdd: jobs.length,
    added: results.filter(({ success }) => success).length,
    errors: results.filter(({ error }) => error).length,
  });
};

