#Set up a personal github account
If you are facing this propblem on mac or windows:
GitHub: Permission denied (publickey). fatal: Could not read from remote repository

https://help.github.com/articles/set-up-git/

Create a repository in github
Check in the local changes to the github repository
git init
git commit -m "first commit"
git remote add origin git@github.com:Yoggihub/react-redux-app.git
git push -u origin master


#How to manage branches on github
https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches

Create the branch on your local machine and switch in this branch :
git checkout -b [name_of_your_new_branch]

Change working branch :
git checkout [name_of_your_new_branch]

Push the branch on github and set upstream:
git push origin [name_of_your_new_branch] -u
git push --set-upstream origin 3-multiple-components

see all branches created by using :
git branch

see the changed files
git status

merge develop or master to your own functional branch
git merge origin/develop
or
git merge origin/master

reset the branch to previous changes
git reset --merge

Renaming the existing branch
git branch --move <old_name> <new_name>
but to push it, you must delete the old and push the new

git checkout <new_name>
git push origin [--set-upstream] <new_name>
git push origin --delete <old_name>


logs
https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History
git log
git log --pretty=oneline
git log --pretty=format
git log --since=2.weeks

git fetch, merge, pull
https://help.github.com/articles/fetching-a-remote/


see the changed files
git log -m --name-only
git diff HEAD~1

See the summary of changes again:
git diff --stat master@{1} master

See all of the changes: 
git diff master@{1} master

jump back to beginning of file by typing any one of the following command
1G OR gg

jump to line number 700 (press ESC type 700G)
700G

 #Set up eslint
 npm i eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react babel-eslint --save-dev


 #Terminal/ vim editor basic shortcuts
:q to quit (short for :quit)
:q! to quit without saving (short for :quit!)
:wq to write and quit
:wq! to write and quit even if file has only read permission (if file does not have write permission: force write)
:x to write and quit (similar to :wq, but only write if there are changes)
:exit to write and exit (same as :x)
:qa to quit all (short for :quitall)
:cq to quit without saving and make Vim return non-zero error (i.e. exit with error)
