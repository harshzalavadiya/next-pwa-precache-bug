const withPWA = require("next-pwa");
const { nanoid } = require("nanoid");

module.exports = withPWA({
  pwa: {
    dest: "public",
    additionalManifestEntries: [
      { url: "/", revision: nanoid() },
      { url: "/hello/world", revision: nanoid() },
    ],
  },
});
