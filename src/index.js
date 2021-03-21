const github = require("@actions/github");
const core = require("@actions/core");
const Post = require("./post");

async function run() {
  const DEVPAPER_TOKEN = core.getInput("DEVPAPER_TOKEN");

  const kit = github.getOctokit(DEVPAPER_TOKEN);

  await new Post(kit, github.context).send();
}

run().catch((err) => core.setFailed(err));
