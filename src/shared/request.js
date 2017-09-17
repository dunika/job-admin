import fetch from 'isomorphic-fetch';
import Form from 'isomorphic-form-data';

const withFormData = (formData) => {
  const form = new Form();
  Object.entries(formData).forEach(([key, value]) => {
    form.append(key, value);
  });
  return {
    body: form,
    headers: {
      ...form.getHeaders(),
    },
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

const handleSuccessResponse = (response) => {
  const contentType = response.headers.get('Content-Type');
  if (/text|xml|html/.test(contentType)) {
    return response.text();
  }
  return response.json();
};

export default async (url, body) => {
  try {
    const options = body ? withBody(body) : {
      headers: {},
      method: 'GET',
    };
    const response = await fetch(url, options);
    if (response.ok) {
      return handleSuccessResponse(response);
    }
    throw new Error(await response.text());
  } catch (error) {
    return new Error(error);
  }
};
