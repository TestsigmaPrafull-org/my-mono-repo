

const branch = process.env.BRANCH_NAME || require('child_process').execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

module.exports = {
  access: 'public',
  bumpDeps: true,
  generateChangelog: true,
  defaultNpmTag: getBranchTag(branch),
  prereleasePrefix: getPrereleasePrefix(branch),
  branch: branch, // Use the detected parent branch
  registry: 'https://npm.pkg.github.com', // Use GitHub Packages
  changeFilePrompt: {
    type: true,        // Prompts for change type (major, minor, patch)
    comment: true,     // Prompts for change description
    packageName: true, // Prompts for package name
    email: true       // Prompts for email
  }
};

function getBranchTag(branchName) {
  switch(branchName) {
    case 'main':
      return 'latest';
    case 'develop':
      return 'rc';
    default:
      return 'beta';
  }
}

function getPrereleasePrefix(branchName) {
  switch(branchName) {
    case 'main':
      return '';
    case 'develop':
      return 'rc';
    default:
      return 'beta';
  }
}