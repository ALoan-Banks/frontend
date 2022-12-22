export const environment = {
  production: true,
  url: 'http://aloanbanksapp-env.eba-yuubmsje.us-east-1.elasticbeanstalk.com/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':
      'http://aloanbanks-frontend-bucket.s3-website-us-east-1.amazonaws.com',
    'Current-User': '',
  },
  withCredentials: true,
};
