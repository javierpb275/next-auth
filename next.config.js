const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        db_user: `${process.env.DB_USER}`,
        db_user_password: `${process.env.DB_USER_PASSWORD}`,
        db_name: `${process.env.DB_NAME}`,
        db_cluster_name: `${process.env.DB_CLUSTER_NAME}`,
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      db_user: `${process.env.DB_USER}`,
      db_user_password: `${process.env.DB_USER_PASSWORD}`,
      db_name: `${process.env.DB_NAME}`,
      db_cluster_name: `${process.env.DB_CLUSTER_NAME}`,
    },
  };
};
