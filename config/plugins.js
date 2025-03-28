const { env } = require("@strapi/utils");

module.exports = () => ({
  // ... Éventuelles autres clefs
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("dh5a8luf9"),
        api_key: env(521887725733499),
        api_secret: env("zKu9zhT8RhhnsRzLXq1OFqi3wr4"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {
          timeout: 1000 * 60 * 3, // = 3 minutes
        },
        delete: {},
      },
    },
  },
  // ... Éventuelles autres clefs
});
