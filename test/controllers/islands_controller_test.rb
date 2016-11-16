require 'test_helper'

class IslandsControllerTest < ActionDispatch::IntegrationTest
  test 'the main page renders some template' do
    get islands_path
    assert_response :success
  end
end
