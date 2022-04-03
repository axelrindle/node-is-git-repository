# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased
### Added

- TypeScript definitions.

### Changed

- The `sync` function throws errors now directly instead of just returning them.
- A successful operations returns `undefined` instead of `null`.

### Security

- Updated the dev dependencies
- Fixed vulnerabilities (see https://github.com/advisories/GHSA-xvch-5gv4-984h)

## 1.0.1 - 2021-06-12
### Security

- Updated the dev dependencies
- Fixed 3 vulnerabilities (see https://github.com/advisories/GHSA-qqgx-2p2h-9c37)

## 1.0.0 - 2020-07-26
### Added

- Export two functions: `isGitRepository()` and a sync version `isGitRepository.sync()`