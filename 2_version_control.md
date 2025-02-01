# Version Control (Git & GitHub)

## Centralized vs. Distributed Version Control

- **Git** is a **distributed** version control system.
- In **centralized** systems like SVN or CVS, there is a **single point of failure**. If the centralized server goes down, developers cannot share code.
- **Distributed systems** like Git allow individual developers to maintain copies of the repository, enabling collaboration without dependency on a central server.
- **GitHub** is a cloud-based platform for hosting Git repositories.

## Git Branching Strategy

Let's consider a **calculator app** with basic functionalities (add, subtract, multiply, divide). Now, if you want to add a **percentage feature**, you would:
1. Create a **new branch**.
2. Develop and test the feature in the new branch.
3. Merge the branch into the `main/master` branch.

### Common Branch Types:

- **Master/Main Branch**:
  - Used for active development and must always be up-to-date.
- **Feature Branch**:
  - Developers use this branch to work on new features before merging them into `main`.
- **Release Branch**:
  - A stable branch, derived from `main`, used to prepare for production release.
- **Hotfix Branch**:
  - Used to quickly fix bugs in production.

## Useful Git Commands

### Basic Setup
```bash
git --version  # Check installed Git version
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --list  # View Git configuration
```

### Initializing a Repository
```bash
echo "# Project Title" >> README.md  # Create README
touch .gitignore  # Create .gitignore file
git init  # Initialize Git repository
git add .  # Stage all changes
git status  # Check status of changes
git commit -m "Initial commit"  # Commit changes
git branch -M main  # Rename default branch to 'main'
```

### Connecting to Remote Repository
```bash
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"  # Generate SSH key for authentication
git remote add origin <github_ssh_url>  # Connect local repo to GitHub
git remote -v  # Verify remote repository
git push -u origin main  # Push changes to GitHub
```

### Cloning a Repository
```bash
git clone <github_https_url>  # Clone a repo
git clone <github_https_url> <folder_name>  # Clone into a specific folder
```

### Working with Branches
```bash
git branch  # List branches
git branch <branch_name>  # Create a new branch
git checkout <branch_name>  # Switch to a branch
git checkout -b <branch_name>  # Create and switch to a new branch
```

### Merging and Rebasing
```bash
git merge <branch_name>  # Merge specified branch into current branch
git rebase <branch_name>  # Reapply commits on top of another base branch
git cherry-pick <commit_hash>  # Apply a specific commit from another branch
```

### Deleting Branches
```bash
git branch -d <branch_name>  # Delete a branch locally
git push origin --delete <branch_name>  # Delete a branch from remote
```

### Fetching and Pulling
```bash
git fetch origin  # Fetch changes from remote without merging
git merge origin/main  # Merge fetched changes into the current branch
git pull origin main  # Fetch and merge changes in one step
```

### Comparing and Viewing History
```bash
git log  # View commit history
git log --oneline  # View commit history in a compact format
git log <branch_name>  # View commit history of a specific branch
git diff <branch_name>  # Compare changes between branches
```

### Undoing Changes
#### Case 1: Undo Staged Changes (Not Committed Yet)
```bash
git reset <file_name>  # Unstage a file
git reset  # Unstage all files
```
#### Case 2: Undo Committed Changes
```bash
git reset HEAD~1  # Move back one commit
git reset <commit_hash>  # Move back to a specific commit
git reset --hard <commit_hash>  # Remove changes from Git and local setup
```

### Reverting Commits
```bash
git revert HEAD  # Revert latest commit
git revert HEAD~1  # Revert the last two commits
git commit --amend -m "Updated commit message"  # Modify last commit message
```

## Additional Git Concepts

### Merge vs. Rebase vs. Cherry-Pick
- **Merge**: Integrates changes from one branch into another, preserving commit history.
- **Rebase**: Moves commits to the top of the main branch, keeping a linear history.
- **Cherry-Pick**: Selectively applies individual commits to another branch.

### Working with Remote Repositories
```bash
git remote rename origin upstream  # Rename remote repository
git remote set-url origin git@new_url.com:user/repo.git  # Change remote URL
git branch -r  # View remote branches
git branch -a  # View all local and remote branches
```

## Git Ignore Examples
```gitignore
*.temp  # Ignore all .temp files
temp/  # Ignore all files in any directory named 'temp'
temp?.log  # Ignore temp1.log, temp2.log, temp3.log, etc.
*.log
!main.log  # Ignore all .log files except main.log
```

## Key Git Concepts
- **Pull Requests (PRs)**: Propose changes to a repository before merging.
- **Merge Conflicts**: Resolve conflicts when merging branches.
- **Forking**: Creates an independent copy of a repository.
- **Clone vs. Fork**:
  - **Clone**: Copies a repository for local use.
  - **Fork**: Creates a separate version of a repository on GitHub, useful for contributing to open-source projects.

---

