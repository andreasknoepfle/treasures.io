class TestOceanController < ApplicationController
  def index
    @ocean = OceanService.new.call
  end
end
