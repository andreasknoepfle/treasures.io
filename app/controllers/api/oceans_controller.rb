class Api::OceansController < ApplicationController
  def index
    oceans = Array.new(4) do
      OceanService.new(Random.rand(1..5)).call
    end
    render json: oceans
  end
end
