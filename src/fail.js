const core = require("@actions/core");

module.exports = function (err) {
  core.setFailed(err);
};
