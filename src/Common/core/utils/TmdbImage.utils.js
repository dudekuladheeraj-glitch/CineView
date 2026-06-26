import { env } from './Env.utils';
export const getPosterUrl = (path, size = 'w342') => path ? `${env.tmdbImageBaseUrl}/${size}${path}` : '';
export const getBackdropUrl = (path, size = 'w780') => path ? `${env.tmdbImageBaseUrl}/${size}${path}` : '';
