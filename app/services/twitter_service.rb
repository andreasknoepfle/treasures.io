class TwitterService
  APP_CONFIG = YAML.load(File.read('config/settings/development.yml'))
                   .with_indifferent_access

  def initialize
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key        = APP_CONFIG['consumer_key']
      config.consumer_secret     = APP_CONFIG['consumer_secret']
      config.access_token        = APP_CONFIG['access_token']
      config.access_token_secret = APP_CONFIG['access_token_secret']
    end
  end
end
