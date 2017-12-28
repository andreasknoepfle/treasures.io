[![Stories in Ready](https://badge.waffle.io/andreasknoepfle/treasures.io.png?label=ready&title=Ready)](https://waffle.io/andreasknoepfle/treasures.io)
[![Build Status](https://travis-ci.org/andreasknoepfle/treasures.io.svg?branch=master)](https://travis-ci.org/andreasknoepfle/treasures.io)
[![Code Climate](https://codeclimate.com/github/andreasknoepfle/treasures.io/badges/gpa.svg)](https://codeclimate.com/github/andreasknoepfle/treasures.io)
[![codecov](https://codecov.io/gh/andreasknoepfle/treasures.io/branch/master/graph/badge.svg)](https://codecov.io/gh/andreasknoepfle/treasures.io)

# Prerequisites

1. Install Node with nvm https://github.com/creationix/nvm
2. Install Ruby with rbenv https://github.com/rbenv/rbenv
- Get build requirements for ruby-build from here https://github.com/rbenv/ruby-build/wiki#troubleshooting
3. Install Cairo (used by the `canvas` npm package)
`sudo apt-get install libcairo2-dev libjpeg-dev libgif-dev`
4. Install Yarn https://yarnpkg.com/en/docs/install
5. Install bundler `gem install bundler`

# Install

1. Install gems `bundle install`
2. Install Node deps `yarn`
3. Compile assets for the first time `bin/webpacker`

# Run
`rails s`

# Run ruby test
`rake` or `rspec`

# Run JS tests
`yarn test`
