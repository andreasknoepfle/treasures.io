class Api::OceansController < ApplicationController
  def index
    params = Rack::Utils.parse_query URI(request.url).query
    n_oceans = params['n_oceans']
    n_oceans = '1' if n_oceans.empty?
    oceans = Array.new(n_oceans.to_i) do
      OceanService.new(Random.rand(1..5)).call
    end
    render json: oceans
  end
end
