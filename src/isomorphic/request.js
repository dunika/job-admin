import fetch from 'isomorphic-fetch';
import Form from 'isomorphic-form-data';
import urlJoin from 'url-join';
import { stringify } from 'query-string';
import { get, compose } from 'lodash/fp';

import { baseUrl } from 'config';

const addFormData = (formData) => {
  const form = new Form();
  Object.entries(formData).forEach(([key, value]) => {
    if (typeof value === 'undefined') {
      throw new Error(`Form data ${key} is undefined`);
    }
    form.append(key, value);
  });
  return {
    body: form,
    method: 'POST',
    headers: form.getHeaders(),
  };
};

const addJson = (body) => {
  try {
    return {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    throw new Error('Invalid JSON in body');
  }
};

const addAuth = authToken => (options) => {
  if (!authToken) {
    return options;
  }
  return {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${authToken}`,
    },
  };
};

const addBody = body => (options) => {
  if (!body || get(body, 'body.queryString')) {
    return options;
  }
  const formData = get(body, 'body.formData');
  if (formData) {
    return addFormData(formData);
  }
  return addJson(body);
};

const addDefaults = options => ({
  method: 'GET',
  ...options,
  headers: {
    ...options && options.headers,
  },
});

const buildOptions = (body, authToken) => compose(
  addDefaults,
  addBody(body),
  addAuth(authToken),
);

const buildUrl = (url, body) => {
  const query = get(body, 'body.queryString') ? stringify(body.queryString) : '';
  return /^https?:\/\//.test(url) ? urlJoin(url, query) : urlJoin(baseUrl, url, query);
};

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

const request = async (url, body, authToken, options) => {
  try {
    const requestOptions = buildOptions(body, authToken)(options);
    const requestUrl = buildUrl(url, body);
    const response = await fetch(requestUrl, requestOptions);
    if (response.ok) {
      return getResponseData(response);
    }
    throw new Error(await handleError(response));
  } catch (error) {
    throw new Error(error.message);
  }
};

['get', 'post', 'put', 'patch', 'delete'].forEach((method) => {
  request[method] = function createMethod(url, body, token, options) {
    return this(url, body, token, { ...options, method: method.toUpperCase() });
  };
});

export default request;
