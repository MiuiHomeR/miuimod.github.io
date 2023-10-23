#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
<<<<<<< HEAD
# npm run build
=======
npm run build
>>>>>>> origin/master

# cd 到构建输出的目录下
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
<<<<<<< HEAD
git push -f git@github.com:miuimod/miuimod.github.io.git master:pages
=======
git push -f git@github.com:miuimod/miuimod.github.io.git master:gh-pages
>>>>>>> origin/master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

<<<<<<< HEAD
cd -
=======
cd -
>>>>>>> origin/master
