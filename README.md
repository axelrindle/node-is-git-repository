![CI](https://github.com/axelrindle/node-is-git-repository/workflows/CI/badge.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/24cdb7ac29974d25ba4a8201b89291ac)](https://www.codacy.com/manual/axelrindle/node-is-git-repository?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=axelrindle/node-is-git-repository&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/24cdb7ac29974d25ba4a8201b89291ac)](https://www.codacy.com/manual/axelrindle/node-is-git-repository?utm_source=github.com&utm_medium=referral&utm_content=axelrindle/node-is-git-repository&utm_campaign=Badge_Coverage)

# node-is-git-repository

Node.JS package for testing whether a given directory belongs to a git repository.

## Installation

```bash
$ npm i @axelrindle/is-git-repository
```

## Usage

```js
const isGitRepository = require('@axelrindle/is-git-repository');

(async () => {
  await isGitRepository(); // fails when not in a valid git repository
  // ...
})();

```

[Check the wiki](https://github.com/axelrindle/node-is-git-repository/wiki/API) for a full API overview.

## License
[MIT](LICENSE)
