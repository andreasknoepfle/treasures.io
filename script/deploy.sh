#!/bin/sh
if [[ "$TRAVIS_BRANCH" != "master" ]]; then
  echo "We're not on the production branch."
  # analyze current branch and react accordingly
  exit 0
fi

echo $DEPLOY_KEY > /tmp/deploy_key.enc
base64 --decode /tmp/deploy_key.enc > /tmp/deploy_key
chmod 600 /tmp/deploy_key
ssh-add /tmp/deploy_key
git remote add dokku dokku@smallbutton.com:treasures
git push -f dokku production:master
