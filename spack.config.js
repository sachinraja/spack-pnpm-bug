const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    web: __dirname + "/index.ts",
  },
  output: {
    name: "index.js",
    path: __dirname + "/dist",
  },
});
