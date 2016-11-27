require_relative 'boot'

#require 'rails/all'

# or

require "active_model/railtie"
require "active_job/railtie"
# require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "sprockets/railtie"
require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module InternetOfIslands
  class Application < Rails::Application
    Rails.application.configure do

      # Use Yarn for assets bundling
      config.npm.install = ['yarn']
    end
  end
end
