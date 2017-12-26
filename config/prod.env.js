'use strict';

var pkgJson = require("../package.json");

module.exports = {
  NODE_ENV: JSON.stringify("production"),
  VERSION: JSON.stringify(pkgJson.version),
  NAME: JSON.stringify(pkgJson.name)
};
