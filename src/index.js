const github = require('@actions/github');
const core = require('@actions/core');

async function run() {

    const token = core.getInput('GITHUB_TOKEN');
    const kit = github.getOctokit(token);

    console.log('Kit init with context', github.context);

}

run();