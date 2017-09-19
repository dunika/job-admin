import request from './request';

export const isDevelopment = process.env.NODE_ENV !== 'production';

export { request };
