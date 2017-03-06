
require 'twitter'

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

  def tweets_from_user_that_contain(user, number_of_posts = 5, *tags)
    @client.search("from:#{user} #{make_hashtags(tags)}", result_type: 'recent')
           .take(number_of_posts)
           .each do |tweet|
      puts tweet.text
    end
  end

  def tweets_containing(*tags)
    tweets = @client.search(make_hashtags(tags),
                            result_type: 'recent',
                            language: 'en')
    tweets.attrs[:statuses].each do |tweet|
      puts "#{tweet[:user][:name]}: #{tweet[:text]}"
    end
  end

  def list_trend_names
    @client.trends.attrs[:trends].each do |trend|
      puts trend[:name]
    end
  end

  private

  def make_hashtags(tags) # takes an array of words
    hashtags = []
    tags.each do |tag|
      hashtags << '#' + tag
    end
    hashtags.join(', ')
  end
end
