import { resolve } from 'path';

export const resolvePath = path => resolve(__dirname, path);

export const isDevelopment = process.env.NODE_ENV !== 'production';
