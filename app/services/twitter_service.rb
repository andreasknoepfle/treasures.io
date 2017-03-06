require 'twitter'
APP_CONFIG = YAML.load(File.read('config/settings/development.yml'))
                 .with_indifferent_access
class TwitterService
  def initialize
    @twitter = Twitter::REST::Client.new do |config|
      config.consumer_key        = APP_CONFIG['consumer_key']
      config.consumer_secret     = APP_CONFIG['consumer_secret']
      config.access_token        = APP_CONFIG['access_token']
      config.access_token_secret = APP_CONFIG['access_token_secret']
    end
  end

  def search_tweets(user = '', number_of_posts = 5, *tags)
    @twitter.search("#{user} #{make_hashtags(tags)}", result_type: 'recent')
            .take(number_of_posts)
  end

  def trend_names
    names = []
    trends.attrs[:trends].each do |trend|
      names << trend[:name]
    end
    names
  end

  private

  def trends # returns Twitter::Trendresults
    @twitter.trends
  end

  def make_hashtags(tags) # takes an array of words
    hashtags = []
    tags.each do |tag|
      hashtags << if tag[0] == '#'
                    tag
                  else
                    '#' + tag
                  end
    end
    hashtags.join(', ')
  end
end
