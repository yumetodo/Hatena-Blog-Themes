ls -l /tmp/ssh/
ssh-agent bash -c 'ssh-add /tmp/ssh/githubdeploy; git clone -b gh-pages git@github.com:yumetodo/Hatena-Blog-Themes.git /dev/shm/Hatena-Blog-Themes'
bash -c 'cd /dev/shm/Hatena-Blog-Themes; git status;'
cp -r bin /dev/shm/Hatena-Blog-Themes
cd /dev/shm/Hatena-Blog-Themes
git config user.name "yumetodo"
git config user.email "yume-wikijp@live.jp"
git config push.default simple
git add .
git commit -m "Deploy minified css/js [skip ci]"
ssh-agent bash -c 'ssh-add /tmp/ssh/githubdeploy; git push'
cd $SHIPPABLE_BUILD_DIR
