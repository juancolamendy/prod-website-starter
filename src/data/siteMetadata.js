const isDev = process.env.NODE_ENV !== 'production';
const baseUrl = isDev ? 'http://localhost:3000' : 'https://www.domainname.com';

console.log('isDev:', isDev);
console.log('baseUrl:', baseUrl);

const siteMetadata = {
  analytics: {
    googleAnalyticsId: 'G-J4PY2702H2',
  },

  site: {
    isDev: isDev,
    baseUrl: baseUrl,
  },
}

export default siteMetadata;
