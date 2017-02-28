require 'rails_helper'

RSpec.describe Api::OceansController do
  let(:json_response) { JSON.parse(response.body) }
  let(:oceans) { json_response }
  let(:ocean_service) { instance_double(OceanService, call: 'ocean') }

  it 'renders 4 oceans, when there are no additional parameters' do
    get :index
    expect(response).to be_success
    expect(oceans.size).to be 4
  end

  it 'renders 0 oceans' do
    get :index, limit: '0'
    expect(response).to be_success
    expect(oceans.size).to be
  end

  it 'calls the OceanService with 4 as limit' do
    expect(OceanService)
      .to(receive(:new).exactly(4).times.and_return(ocean_service))
    get :index, limit: '4'
    expect(oceans).to eq %w(ocean ocean ocean ocean)
  end

  it 'calls the ocean with forbidden parameters (< 0 | > 20)' do
    get :index, limit: '21'
    expect(response).to be_bad_request
  end

  it 'calls the OceanService' do
    expect(OceanService)
      .to(receive(:new).exactly(4).times.and_return(ocean_service))
    get :index, n_oceans: '4'
    expect(oceans).to eq %w(ocean ocean ocean ocean)
  end
end
