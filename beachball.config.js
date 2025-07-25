// beachball.config.js

function getParentBranch() {
  try {
    // Get current branch
    const currentBranch = require('child_process').execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    
    if (currentBranch === 'main' || currentBranch === 'develop') {
      return currentBranch;
    }

    // Get the fork point by looking at reflog
    const forkPoint = require('child_process')
      .execSync(`git reflog show --no-abbrev ${currentBranch} | grep -m1 'from develop\|from main' | cut -d' ' -f1`)
      .toString()
      .trim();

    if (forkPoint) {
      // If we found a fork point from reflog, check if it was from develop or main
      const forkFrom = require('child_process')
        .execSync(`git reflog show --no-abbrev ${currentBranch} | grep -m1 'from develop\|from main'`)
        .toString();

      return forkFrom.includes('from develop') ? 'develop' : 'main';
    }

    // If we can't determine from reflog, check which branch (develop or main) is closest ancestor
    try {
      require('child_process').execSync(`git merge-base --is-ancestor develop HEAD 2>/dev/null`);
      return 'develop';
    } catch {
      try {
        require('child_process').execSync(`git merge-base --is-ancestor main HEAD 2>/dev/null`);
        return 'main';
      } catch {
        // If neither is ancestor, default to develop
        return 'develop';
      }
    }
  } catch (error) {
    // Fallback to develop if anything fails
    return 'develop';
  }
}

const branch = process.env.BRANCH_NAME || require('child_process').execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
const parentBranch = getParentBranch();

module.exports = {
  access: 'public',
  bumpDeps: true,
  generateChangelog: true,
  defaultNpmTag: getBranchTag(branch),
  prereleasePrefix: getPrereleasePrefix(branch),
  branch: parentBranch, // Use the detected parent branch
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