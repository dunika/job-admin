export const isDevelopment = process.env.NODE_ENV !== 'production';

export const isServer = typeof window === 'undefined';

export regions from './regions';

export request from './request';
