source 'https://rubygems.org'

gem 'better_errors'
gem 'binding_of_caller'
gem 'byebug'

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
  gem 'rubocop', require: false
  gem 'refills'
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
gem 'rspec-rails', group: [:development, :test]
