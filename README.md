# Create react-app
1. Create a repository on GitHub
2. Clone it on your local machine
3. cd ...  &  code .
4. Create react project
```bash
npx create-vite frontend --template react
```
- - if does not work use the code below and repeat install
```bash
npm uninstall -g create-react-app
```
5. cd app-name 
6. npm install (creates node modules)
<!-- ------------------------------ -->
<!-- ------------------------------ -->
<!-- ------------------------------ -->
- When you changed something in your code you will need to upload it to you github profile
1. `git add .`
2. `git commit -m 'message'`
3. `git push`


- NOTE: If it asks for your information, then it means that you have not configured your git-info

set your name and email
```bash
git config --global user.name "..."
git config --global user.email "..."
```
then write push again
```bash
git push
```

<!-- ------------------------------ -->
<!-- ------------------------------ -->
<!-- ------------------------------ -->
# When you work with Fullstack16
1. git clone ...
2. cd fullstack16
3. code .
4. cd frontend
5. npm install
<!-- ------------------------------ -->
<!-- ------------------------------ -->
<!-- ------------------------------ -->
# During development
1. if i do `git push`, you must get it by `git pull`
2. if i installed smth, so you must do it too by `npm install`

<!-- ------------------------------ -->
<!-- ------------------------------ -->
<!-- ------------------------------ -->
If `git pull` does not work, delete every change you made and repeat `git pull` again

or, if still does not work, make `git stash` and repeat `git pull`