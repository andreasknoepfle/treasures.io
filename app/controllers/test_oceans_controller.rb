class TestOceansController < ApplicationController
  def index
    @ocean = OceanService.new(Random.rand(1..5)).call
  end
end
