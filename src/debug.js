const core = require("@actions/core");

module.exports.debug = function (data) {
  const msg =
    typeof data === "object" ? JSON.stringify(data, null, 2) : String(data);
  return core.debug(msg);
};
