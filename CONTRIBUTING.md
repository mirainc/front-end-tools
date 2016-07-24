# Contributing

_This document, along with [`PULL_REQUEST_TEMPLATE.md`](./PULL_REQUEST_TEMPLATE.md) should be replicated in the `.github` directory of all Mira repositories._


## General Workflow

1. Cut a namespaced branch from staging or the working branch. Namespace your branches by intent, for example:
  - KiaFathi/feat/write-contributing-guidelines
1. Make commits to your branch. Prefix each commit like so:
  - (feat) Add a new feature
  - (fix) Fix inconsistent tests
  - (refactor) ...
  - (cleanup) ...
  - (test) ...
  - (doc) ...
1. When you've finished with your fix or feature, rebase upstream changes into your branch. If you have to, resolve merge conflicts locally.
1. Push your rebased branch to the repository.
1. Submit a pull request to the repository from your branch.
1. Your pull request will be reviewed by another maintainer. The point of code reviews is to help keep the codebase clean and of high quality and, equally as important, to help you grow as a programmer. If your code reviewer requests you make a change you don't understand, ask them why.
1. Fix any issues raised by your code reviewer, and push your fixes as a single new commit.
1. Once the pull request has been reviewed, it will be merged by another member of the team. **Do not merge your own commits!**

## Detailed Workflow

### Cut a namespaced feature branch from staging

Your branch should be named after your user and the branche's intent. For example,
  - Feature: KiaFathi/feat/add-address-book
  - Fix: KiaFathi/fix/calibrate-shark-lasers
  - Documentation: KiaFathi/doc/capture-life-story-in-ascii-art

These commands will help you do this:

``` bash
# Creates your branch and brings you there
git checkout -b <YOUR_BRANCH_NAME>
```

### Make commits to your feature branch.

Prefix each commit like so
- (feat) Add a new feature
- (fix) Fix inconsistent tests
- (refactor) ...
- (cleanup) ...
- (test) ...
- (doc) ...

Make changes and commits on your branch, and make sure that you only make changes that are relevant to this branch. If you find yourself making unrelated changes, make a new branch for those changes.

#### Commit Message Guidelines

- Commit messages should be written in the present tense in imperative mood; e.g. "(fix) correct continuous integration script".
- The first line of your commit message should be a brief summary of what the commit changes. Aim for about 70 characters max. Remember: This is a summary, not a detailed description of everything that changed.
- If you want to explain the commit in more depth, following the first line should be a blank line and then a more detailed description of the commit. This can be as detailed as you want, so dig into details here and keep the first line short.

### Rebase upstream changes into your branch

Once you are done making changes, you can begin the process of getting your code merged into the main repo. Step 1 is to rebase upstream changes to the staging branch into yours by running this command from your branch:

``` bash
git pull --rebase <UPSTREAM_REMOTE> <UPSTREAM_REMOTE_BRANCH>
```

This will start the rebase process. You must commit all of your changes before doing this. If there are no conflicts, this should just roll all of your changes back on top of the changes from upstream, leading to a nice, clean, linear commit history.

If there are conflicting changes, git will start yelling at you part way through the rebasing process. Git will pause rebasing to allow you to sort out the conflicts. You do this the same way you solve merge conflicts, by checking all of the files git says have been changed in both histories and picking the versions you want. Be aware that these changes will show up in your pull request, so try and incorporate upstream changes as much as possible.

Once you are done fixing conflicts for a specific commit, run:

``` bash
git rebase --continue
```

This will continue the rebasing process. Once you are done fixing all conflicts you should run the existing tests to make sure you didn’t break anything, then run your new tests (there are new tests, right?) and make sure they work also.

If rebasing broke anything, fix it, then repeat the above process until you get here again and nothing is broken and all the tests pass.

### Push your changes to the repository
```bash
git push origin <BRANCH_NAME>
```

### Make a pull request

Go to your forked GitHub repository to make a pull request.

Make a clear pull request from your branch to the upstream working branch, detailing exactly what changes you made and what feature this should add. The clearer your pull request is the faster you can get your changes incorporated into this repo.

Pull requests must be named in the following format as laid out in the [PR template](./PULL_REQUEST_TEMPLATE.md).

At least one other person MUST give your changes a code review, and once they are satisfied they will merge your changes into upstream. Alternatively, they may have some requested changes. You should make more commits to your branch to fix these, then follow this process again from rebasing onwards.

Once you get back here, make a comment requesting further review and someone will look at your code again. If they like it, it will get merged, else, just repeat again.

Thanks for contributing!

## Checklist:

This is just to help you organize your process

- [ ] Did I cut my work branch off of the staging or working branch?
- [ ] Did I follow the correct naming convention for my branch?
- [ ] Is my branch focused on a single main change?
- [ ] Do all of my changes directly relate to this change?
- [ ] Did I rebase off of the upstream repository after I finished all my work?
- [ ] Did I write a clear pull request message detailing what changes I made?
- [ ] Did I get a code review?
- [ ] Did I make any requested changes from that code review?

If you follow all of these guidelines and make good changes, you should have no problem getting your changes merged in.

### Useful Resources:
1. <a href='http://pcottle.github.io/learnGitBranching/'>Learn Git Branching</a>
