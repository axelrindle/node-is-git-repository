// Require modules
const child_process = require('child_process');

/**
 * @param {string} cwd A directory path.
 * @returns {string} The given parameter or `process.cwd()` as a fallback.
 */
const getCwd = cwd => cwd || process.cwd();

/**
 * Asynchronously tests whether the given directory is a valid git repository.
 * 
 * @param {string?} cwd The directory to check. Defaults to the current working directory.
 * @returns {Promise<Error?>} A Promise that resolves with `null` if the given directory is a valid git repository,
 *                            with an error otherwise.
 */
module.exports = (cwd) => {
    cwd = getCwd(cwd);

    return new Promise((resolve, reject) => {
        child_process.exec('git status', { cwd }, err => {
            if (err) reject(err);
            else resolve(null);
        });
    });
};

/**
 * Synchronous version.
 * 
 * @param {string} cwd The directory to check. Defaults to the current working directory.
 * @returns {Error?} `null` if the given directory is a valid git repository, with an error otherwise.
 */
module.exports.sync = (cwd) => {
    cwd = getCwd(cwd);

    try {
        child_process.execSync('git status', {
            cwd,
            stdio: 'ignore'
        });
        return null;
    } catch (error) {
        return error;
    }
};