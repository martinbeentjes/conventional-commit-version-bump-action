const core = require('@actions/core');
const github = require('@actions/github');
const conventionalRecommendedBump = require(`conventional-recommended-bump`);



try {
  // `who-to-greet` input defined in action metadata file
  const bugfixBranch = core.getInput('bugfix-branch');
  const featureBranch = core.getInput('feature-branch');

  console.log(`Using ${bugfixBranch} for bugfixes`);
  console.log(`Using ${featureBranch} for feature releases`);

  conventionalRecommendedBump({
    preset: `angular`
  }, (error, recommendation) => {
    console.log(`Executing a ${recommendation.releaseType} release`);
  });

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}