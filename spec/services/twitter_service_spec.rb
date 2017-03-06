require 'pry'
require 'rails_helper'

describe 'TwitterService' do
  let(:APP_CONFIG) { {"consumer_key"=>"con_key",
 "consumer_secret"=>"con_secret",
 "access_token"=>"access_tk",
 "access_token_secret"=>"access_secret_tk"}}
 let(:service) { TwitterService.new}



end
