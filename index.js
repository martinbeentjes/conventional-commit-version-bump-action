const core = require('@actions/core');
const github = require('@actions/github');
const conventionalRecommendedBump = require(`conventional-recommended-bump`);

try {
  conventionalRecommendedBump({
    preset: `angular`
  }, (error, recommendation) => {
    console.log(`Executing a ${recommendation.releaseType} release`);
    core.setOutput("next-release-type", recommendation.releaseType);
  });
} catch (error) {
  core.setFailed(error.message);
}