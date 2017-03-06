class IslandsController < ApplicationController
  def index
    twitter = TwitterService.new
    @trend_names = twitter.trend_names
    @tweets = twitter.search_tweets('', 5, 'puppy', 'cute')
  end
end
