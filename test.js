// Require modules
const os = require('os');
const test = require('ava');

const isGitRepository = require('./');

test('current directory should be valid (async)', async t => {
    await isGitRepository();
    t.pass();
});

test('current directory should be valid (sync)', t => {
    t.is(isGitRepository.sync(), null);
});

test('temp directory should be invalid (async)', async t => {
    await t.throwsAsync(async () => {
        const error = await isGitRepository(os.tmpdir());
        t.not(error, null);
    });
});

test('temp directory should be invalid (sync)', t => {
    const error = isGitRepository.sync(os.tmpdir());
    t.not(error, null);
})