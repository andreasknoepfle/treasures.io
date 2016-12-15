source 'https://rubygems.org'

gem 'byebug'
gem 'better_errors'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
# Use Puma as the app server
gem 'puma', '~> 3.0'

gem 'npm-pipeline-rails'
gem 'slim'

group :test do
  gem 'codecov', require: false
end

group :development, :test do
  gem 'pry'
  gem 'pry-rails'
end

group :development do
  gem "rubocop", require: false
  gem "refills"
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
gem "rspec-rails", :group => [:development, :test]
