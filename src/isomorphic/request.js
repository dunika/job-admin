import fetch from 'isomorphic-fetch';
import Form from 'isomorphic-form-data';
import urlJoin from 'url-join';

import { baseUrl } from 'config';

const withFormData = (formData) => {
  const form = new Form();
  Object.entries(formData).forEach(([key, value]) => {
    if (typeof value === 'undefined') {
      throw new Error(`Form value ${key} is undefined`);
    }
    form.append(key, value);
  });
  return {
    body: form,
    method: 'POST',
    headers: form.getHeaders(),
  };
};

const withJson = (body) => {
  try {
    return {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    };
  } catch (error) {
    throw new Error('Invalid body');
  }
};

const withBody = body => (body.formData ? withFormData(body.formData) : withJson(body));

const getResponseData = (response) => {
  const contentType = response.headers.get('Content-Type');
  if (/text|xml|html/.test(contentType)) {
    return response.text();
  }
  return response.json();
};

const handleError = async (response) => {
  const data = await getResponseData(response);
  return typeof data === 'string' ? data : data.error;
};

const handleUrl = url => (/^https?:\/\//.test(url) ? url : urlJoin(baseUrl, url));

export default async (url, body) => {
  try {
    const options = body ? withBody(body) : {
      headers: {},
      method: 'GET',
    };
    const response = await fetch(handleUrl(url), options);
    if (response.ok) {
      return getResponseData(response);
    }
    throw new Error(await handleError(response));
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
