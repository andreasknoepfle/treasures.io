class Api::OceansController < ApplicationController
  def index(n_oceans = 4)
    oceans = Array.new(n_oceans) do
      OceanService.new(Random.rand(1..5)).call
    end
    render json: oceans
  end
end
