let config = {};

if (process.env.NODE_ENV === 'test') {
  config = {
    port: 6111,
    redis: {
      host: 'localhost',
      port: 6379,
    },
  };
} else {
  // for (process.env.NODE_ENV === 'development')
  config = {
    port: 4000,
    redis: {
      host: process.env.KAREN_REDIS_HOST || 'localhost',
      port: process.env.KAREN_REDIS_PORT || 6379,
    },
  };
}

module.exports = config;
