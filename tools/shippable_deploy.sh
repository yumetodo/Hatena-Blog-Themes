#!/bin/bash -eu
echo "ll /tmp/ssh"
ls -l /tmp/ssh
echo "ll /dev/shm"
ls -l /dev/shm
echo "clone taget repogitry..."
ssh-agent bash -c 'ssh-add /tmp/ssh/shippable2githubssh; git clone -b gh-pages git@github.com:yumetodo/Hatena-Blog-Themes.git /dev/shm/Hatena-Blog-Themes'
bash -c 'cd /dev/shm/Hatena-Blog-Themes; git status;'
cd $SHIPPABLE_BUILD_DIR
echo "copy minified result..."
cp -r bin /dev/shm/Hatena-Blog-Themes
cd /dev/shm/Hatena-Blog-Themes
git config user.name "yumetodo"
git config user.email "yume-wikijp@live.jp"
git config push.default simple
git add .
echo "commit changes..."
git commit -m "Deploy minified css/js [skip ci]" &&:
if [ $? != 0 ]; then
    echo "git commit exit with $?"
    exit 0 # nothing to commit means nothing to deploy.
fi
echo "push commit..."
ssh-agent bash -c 'ssh-add /tmp/ssh/shippable2githubssh; git push'
echo "finish deploy."
cd $SHIPPABLE_BUILD_DIR
