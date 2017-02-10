echo $DEPLOY_KEY > /tmp/deploy_key.enc
base64 --decode /tmp/deploy_key.enc > /tmp/deploy_key
eval "$(ssh-agent -s)"
chmod 600 /tmp/deploy_key
ssh-add /tmp/deploy_key
git remote add dokku dokku@smallbutton.com:treasures
git push -f dokku master
