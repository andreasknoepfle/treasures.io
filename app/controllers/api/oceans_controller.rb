class Api::OceansController < ApplicationController
  def index
    params = Rack::Utils.parse_query URI(request.url).query
    count = params['count']
    count = '4' if count.nil? || count.empty?
    if count.to_i.negative? || count.to_i > 20
      render nothing: true, status: :bad_request
    else
      oceans = Array.new(count.to_i) do
        OceanService.new(Random.rand(1..5)).call
      end
      render json: oceans
    end
  end
end
