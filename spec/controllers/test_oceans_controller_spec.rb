require 'rails_helper'

describe TestOceansController do
  it 'renders the main template' do
    get :index
    expect(response).to be_success
  end
end
