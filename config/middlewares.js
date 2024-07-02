module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['https://q-id.vercel.app/', 'https://indeed-project.vercel.app'],
      headers: ['Content-Type', 'Authorization', 'Access-Control-Allow-Headers'],
    },
  },
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
