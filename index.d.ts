declare function isGitRepository(cwd?: string): Promise<void>
declare namespace isGitRepository {
    function sync(cwd?: string)
}
