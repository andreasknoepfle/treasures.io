class Api::OceansController < ApplicationController
  protect_from_forgery with: :null_session
  before_filter :render_bad_request, unless: :limit_valid?

  def index
    oceans = Array.new(number_of_oceans) do
      OceanService.new(Random.rand(1..5)).call
    end
    render json: oceans
  end

  private

  def number_of_oceans
    @number_of_oceans ||= params.fetch(:limit, 4).to_i
  end

  def render_bad_request
    head(:bad_request)
  end

  def limit_valid?
    number_of_oceans.between?(0, 200)
  end
end
