const github = require('@actions/github');
const core = require('@actions/core');

const toStr = data => JSON.stringify(data, null, 2);

async function run() {

    const DEVPAPER_TOKEN = core.getInput('DEVPAPER_TOKEN');
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');

    core.debug(toStr({ DEVPAPER_TOKEN, GITHUB_TOKEN }))

    const kit = github.getOctokit(DEVPAPER_TOKEN);

    core.debug('Context:\n');
    core.debug(toStr(github.context))

}

run().catch(err => core.setFailed(err));