require 'pry'
require 'rails_helper'
require 'twitter'

describe 'TwitterService' do
  let(:service) do
    TwitterService.new do |config|
      config.consumer_key        = APP_CONFIG['consumer_key']
      config.consumer_secret     = APP_CONFIG['consumer_secret']
      config.access_token        = APP_CONFIG['access_token']
      config.access_token_secret = APP_CONFIG['access_token_secret']
    end
  end

  context '#initialize' do # pointless test
    it 'creates a new TwitterService with given parameters' do
      expect(service.class).to eq(TwitterService)
    end
  end

  context '#trend_names' do
    it 'returns the trend names' do
      trend_results = Twitter::TrendResults.new(trends:
                                                 [{ name: 'Foo',
                                                    url: 'http://foo.baz/',
                                                    promoted_content: nil,
                                                    query: '1',
                                                    tweet_volume: 1 },
                                                  { name: 'Bar',
                                                    url: 'http://bar.baz/',
                                                    promoted_content: nil,
                                                    query: '1',
                                                    tweet_volume: 1 }])
      allow(service).to receive(:trends).and_return(trend_results)
      expect(service.trend_names).to eq %w(Foo Bar)
    end
  end

  context 'search_tweets' do
    it 'returns a given number of tweets containing specific words ' do
      expect(service.search_tweets('', 5, 'puppy', 'cute').first.class)
        .to eq(Twitter::Tweet)
      expect(service.search_tweets('', 5, 'puppy', 'cute').count).to eq(5)
      expect(service.search_tweets('', 5, 'puppy', 'cute').first.text)
        .to include('puppy')
    end
  end
end
