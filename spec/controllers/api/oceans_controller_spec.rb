require 'rails_helper'

RSpec.describe Api::OceansController do
  let(:json_response) { JSON.parse(response.body) }
  let(:oceans) { json_response }
  let(:ocean_service) { instance_double(OceanService, call: 'ocean') }

  it 'renders 4 oceans' do
    get :index
    expect(response).to be_success
    expect(oceans.size).to be 4
  end

  it 'calls the OceanService' do
    expect(OceanService)
      .to(receive(:new).exactly(4).times.and_return(ocean_service))
    get :index
    expect(oceans).to eq %w(ocean ocean ocean ocean)
  end
end
